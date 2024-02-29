import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterModule
  ],
  providers: [
    AuthService,

  ],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  user ={
    email: '',
    password: ''
  }

  constructor (
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}

  signin(){
    this.authService.signin(this.user)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token);
          localStorage.setItem('type', res.type);
          localStorage.setItem('fullname', res.fullname);
          this.router.navigate(['index']);
        },
        err => {
          console.log("ERROR Signin component", err)
        } 
      )
  }

}
