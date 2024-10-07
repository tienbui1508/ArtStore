import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Product } from '../../../shared/models/product';
import { TextInputComponent } from '../../../shared/components/text-input/text-input.component';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { ShopService } from '../../../core/services/shop.service';
import { SelectInputComponent } from '../../../shared/components/select-input/select-input.component';
import { TextAreaComponent } from '../../../shared/components/text-area/text-area.component';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [
    TextInputComponent,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    SelectInputComponent,
    TextAreaComponent,
  ],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss',
})
export class ProductFormComponent implements OnInit {
  productForm!: FormGroup;
  data = inject(MAT_DIALOG_DATA);
  private fb = inject(FormBuilder);
  private dialogRef = inject(MatDialogRef<ProductFormComponent>);
  shopService = inject(ShopService);

  ngOnInit(): void {
    this.initializeForm();
    setTimeout(() => {
      this.loadAuthorsAndTypes();
    });
    if (this.data.product) {
      this.productForm.reset(this.data.product);
    }
  }

  initializeForm() {
    this.productForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: [0, [Validators.required, Validators.min(0)]],
      pictureUrl: ['', [Validators.required]],
      type: ['', [Validators.required]],
      author: ['', [Validators.required]],
      quantityInStock: [0, [Validators.required, Validators.min(0)]],
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      let product: Product = this.productForm.value;
      if (this.data.product) product.id = this.data.product.id;
      this.dialogRef.close({
        product,
      });
    }
  }

  loadAuthorsAndTypes(): void {
    this.shopService.getAuthors();
    this.shopService.getTypes();
  }
}
