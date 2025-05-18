import { Component, inject } from '@angular/core';
import { Product, ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  providers:[ProductService]
})
export class ProductComponent {

  productService=inject(ProductService);
  averagePrice:any=this.productService.getAveragePrice();
  products:Product[]=this.productService.getProducts;

  // constructor(private productService:ProductService)
  // {
  //   this.averagePrice=this.productService.getAveragePrice()
  // }

}
