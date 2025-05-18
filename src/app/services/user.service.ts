import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user={
    id:101,
    name:"Nisha",
    age:18
  }

  allUsers=[
    {id:101,name:"Nisha",age:17} ,
    {id:102,name:"Manisha",age:19},
    {id:103,name:"Anisha",age:23}
  ]

  //getUserById(101)
  getUserById(id:number)
  {
     return this.allUsers.filter((user)=>user.id==id)
  }

  constructor() { }
}
