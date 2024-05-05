import { Component, ElementRef, Input, ViewChild, afterNextRender, afterRender } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent{
  @ViewChild('productDetail') productDetailRef!: ElementRef;

  @Input() set id(id: number) {
    this.product$ = this.productService.getProductById(id);    
  }

  product$!: Observable<Product | undefined>;

  constructor(private productService: ProductService) {
    afterRender(() => {
      const height = this.measureHeight();
      console.log('After Render height: ' + height + 'px');
    });

    afterNextRender(() => {
      const height = this.measureHeight();
      console.log('After Next Render height: ' + height + 'px');
    });
  }

  measureHeight() {
    const height = this.productDetailRef.nativeElement.offsetHeight;
    return height;
  }

}
