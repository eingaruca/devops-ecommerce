import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShopService } from '../../../services/shop.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppComponent,
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

//   async ngOnInit(): Promise<void> {
//     try {
//         const cartResponse: any = await this.shopService.getCart().toPromise();
//         console.log("Respuesta de getCart:", cartResponse);
//         this.order = cartResponse;

//         // Llamada a getItemsByOrder solo si hay un pedido válido
//         if (this.order && this.order.id) {
//             const itemsResponse: any = await this.shopService.getItemsByOrder(this.order.id).toPromise();
//             console.log("Respuesta de getItemsByOrder:", itemsResponse);
//             this.items = itemsResponse;
//         }
//     } catch (error) {
//         console.error("Error al obtener el carrito o los elementos del pedido:", error);
//     }
// }




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
