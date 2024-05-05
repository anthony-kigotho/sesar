import { Injectable } from '@angular/core';
import { Product } from './product'; 
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description for Product 1',
      price: 10.99,
      imageUrl: 'https://source.unsplash.com/150x150'
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description for Product 2',
      price: 19.99,
      imageUrl: 'https://via.placeholder.com/150'
    },
    // Add more products as needed
  ];

  getAllProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Observable<Product | undefined> {
    const product = this.products.find(product => product.id == id);
    return of(product);
  }
}
