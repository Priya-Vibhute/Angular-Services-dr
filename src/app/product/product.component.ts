import { Component, inject } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  providers:[ProductService]
})
export class ProductComponent {

  productService=inject(ProductService);
  averagePrice:any=this.productService.getAveragePrice();

  // constructor(private productService:ProductService)
  // {
  //   this.averagePrice=this.productService.getAveragePrice()
  // }

}
