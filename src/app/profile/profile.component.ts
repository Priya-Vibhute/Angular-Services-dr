import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  user:any;
  allUsers:any;
  constructor(private userService:UserService)
  {
    this.user=this.userService.user;
    this.allUsers=this.userService.allUsers;
  }

  getUser(id:number)
  {
    this.allUsers=this.userService.getUserById(id);
  }
}
