import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  message(data:any,msg:string,request:string)
  {
     console.info("=============================");
     console.info(` [${request}] ${msg}: ${data} `)
     console.info("=============================");

  }
}
