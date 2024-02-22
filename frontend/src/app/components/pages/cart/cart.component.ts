import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShopService } from '../../../services/shop.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    // ShopComponent,
  ],
  providers : [
    ShopService,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  userId:string | null = null;
  orderId:any={};

  constructor(
    private shopService: ShopService,
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {

    // Decodificar token para obtener userId
    let token = ''
    if (typeof localStorage !== 'undefined') {
      token = localStorage.getItem('token') || '';
      if ( token.length > 0 && token !== null){
        console.log("tok tok", token);
        this.userId = (JSON.parse(atob(token.split('.')[1]))).id;
      }
    } else {

    }
    console.log('this.userId', this.userId)

    this.shopService.getCart()
        .subscribe(
          res => {
            console.log("res:::> ", res);
            this.orderId = res;
            
          },
          err => {
            console.log(err)
          }
        )

  }


}
