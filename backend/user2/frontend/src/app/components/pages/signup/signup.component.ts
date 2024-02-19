import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{

  user = {
    email: '',
    password: ''    
  }

  constructor() {

  }

  ngOnInit(): void {
      
  }

  login() {
    console.log(this.user)
  }

}
