import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private wishlist: any[] = [];

  addToWishlist(cryptocurrency: any) {
    this.wishlist.push(cryptocurrency);
  }

  isInWishlist(cryptocurrency: any): boolean {
    return this.wishlist.some(item => item.symbol === cryptocurrency.symbol);
  }
}
