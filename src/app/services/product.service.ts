import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

export interface Product 
{
  productId:number,
  productName:string,
  productPrice:number
}
@Injectable()
export class ProductService {

  constructor(private loggerService:LoggerService) { 
  }

 private products:Product[]=[
    {productId:202,productName:"Laptop",productPrice:45000},
    {productId:201,productName:"Mobile",productPrice:35000},
    {productId:203,productName:"Tablet",productPrice:32000}
  ];

  get getProducts()
  {
    return this.products;
  }

  getAveragePrice()
  {
    let total=this.products.reduce((total,product)=>total+product.productPrice,0);
    this.loggerService.message(total/this.products.length,`total product : ${this.products.length}`,"GET")
    return total/this.products.length;
  }
}
