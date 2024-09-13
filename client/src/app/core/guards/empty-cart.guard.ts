import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { of, map } from 'rxjs';
import { SnackbarService } from '../services/snackbar.service';
import { CartService } from '../services/cart.service';

export const emptyCartGuard: CanActivateFn = (route, state) => {
  const cartService = inject(CartService);
  const snackbar = inject(SnackbarService);
  const router = inject(Router);

  if (!cartService.cart() || cartService.cart()?.items.length === 0) {
    snackbar.error('Your cart is empty');
    router.navigateByUrl('/cart');
    return false;
  }

  return true;
};
