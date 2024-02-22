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
  order:any={};
  items:any=[]

  constructor(
    private shopService: ShopService,
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {

    this.shopService.getCart()
        .subscribe(
          res => {
            console.log("res:::> ", res);
            this.order = res;
            this.shopService.getItemsByOrder(this.order.id)
                .subscribe(
                  res => {
                    console.log("resITEM:::> ", res);
                    this.items = res;
                    
                  },
                  err => {
                    console.log(err)
                  }
                )
          },
          err => {
            console.log(err)
          }
        )

    
  }

  eliminarItem(itemId:any){
    this.shopService.deleteItem(itemId)
        .subscribe(
          res => {
            console.log("res:::> ", res);
          },
          err => {
            console.log(err)
          }
        )
  }
}
