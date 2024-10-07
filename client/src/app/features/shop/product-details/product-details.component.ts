import { Component, inject, OnInit } from '@angular/core';
import { ShopService } from '../../../core/services/shop.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../shared/models/product';
import { CurrencyPipe } from '@angular/common';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatDivider } from '@angular/material/divider';
import { CartService } from '../../../core/services/cart.service';
import { FormsModule } from '@angular/forms';
import { CustomTableComponent } from '../../../shared/components/custom-table/custom-table.component';
import { AdminCatalogComponent } from '../../admin/admin-catalog/admin-catalog.component';
import { IsAdminDirective } from '../../../shared/directives/is-admin.directive';
import { firstValueFrom } from 'rxjs';
import { ProductFormComponent } from '../../admin/product-form/product-form.component';
import { DialogService } from '../../../core/services/dialog.service';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from '../../../core/services/admin.service';
import { ShopParams } from '../../../shared/models/shopParams';
import { SnackbarService } from '../../../core/services/snackbar.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    CurrencyPipe,
    MatButton,
    MatIcon,
    MatFormField,
    MatInput,
    MatLabel,
    MatDivider,
    FormsModule,
    CustomTableComponent,
    MatButtonModule,
    IsAdminDirective,
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit {
  private shopService = inject(ShopService);
  private activatedRoute = inject(ActivatedRoute);
  private cartService = inject(CartService);
  product?: Product;
  quantityInCart = 0;
  quantity = 1;
  private dialogService = inject(DialogService);
  private dialog = inject(MatDialog);
  private adminService = inject(AdminService);
  products: Product[] = [];
  productParams = new ShopParams();
  private snackbar = inject(SnackbarService);

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (!id) return;
    this.shopService.getProduct(+id).subscribe({
      next: (product) => {
        this.product = product;
        this.updateQuantityInCart();
      },
      error: (error) => console.log(error),
    });
  }
  updateCart() {
    if (!this.product) return;
    if (this.quantity > this.quantityInCart) {
      const itemsToAdd = this.quantity - this.quantityInCart;
      this.quantityInCart += itemsToAdd;
      this.cartService.addItemToCart(this.product, itemsToAdd);
    } else {
      const itemsToRemove = this.quantityInCart - this.quantity;
      this.quantityInCart -= itemsToRemove;
      this.cartService.removeItemFromCart(this.product.id, itemsToRemove);
    }
  }

  updateQuantityInCart() {
    this.quantityInCart =
      this.cartService
        .cart()
        ?.items.find((x) => x.productId === this.product?.id)?.quantity || 0;
    this.quantity = this.quantityInCart || 1;
  }

  getButtonText() {
    return this.quantityInCart > 0 ? 'Update cart' : 'Add to cart';
  }

  loadProducts() {
    this.shopService.getProducts(this.productParams).subscribe({
      next: (response) => {
        if (response.data) {
          this.products = response.data;
        }
      },
    });
  }

  openEditDialog(product: Product) {
    const dialog = this.dialog.open(ProductFormComponent, {
      minWidth: '500px',
      data: {
        title: 'Edit product',
        product,
      },
    });
    dialog.afterClosed().subscribe({
      next: async (result) => {
        if (result) {
          await firstValueFrom(this.adminService.updateProduct(result.product));
          const index = this.products.findIndex(
            (p) => p.id === result.product.id
          );
          if (index !== -1) {
            this.products[index] = result.product;
          }
        }
        this.loadProduct();
        this.snackbar.success('Product updated');
      },
    });
  }
}
