import { Injectable } from '@angular/core';

export interface Product 
{
  productId:number,
  productName:string,
  productPrice:number
}
@Injectable()
export class ProductService {
  constructor() { }

  products:Product[]=[
    {productId:202,productName:"Laptop",productPrice:45000},
     {productId:201,productName:"Mobile",productPrice:35000},
      {productId:203,productName:"Tablet",productPrice:32000}
  ];

  getAveragePrice()
  {
    let total=this.products.reduce((total,product)=>total+product.productPrice,0);
    return total/this.products.length;
  }
}
