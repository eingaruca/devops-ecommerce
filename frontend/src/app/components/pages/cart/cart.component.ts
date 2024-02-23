import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShopService } from '../../../services/shop.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { AppComponent } from '../../../app.component';
import { UserService } from '../../../services/user.service';
import { XutilitiesService } from '../../../services/xutilities.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    // ShopComponent,
  ],
  providers : [
    ShopService,
    UserService,
    XutilitiesService,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  userId:string | null = null;
  user:any = {};
  order:any = {};
  items:any = []
  communities:any = []

  address: any = {};

  token:any ="";
  // headers:any;

  constructor(
    private shopService: ShopService,
    private userService: UserService,
    private xutilitiesService: XutilitiesService,
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {

    if (typeof localStorage !== 'undefined') {
      this.token = localStorage.getItem('token');
      console.log("CartComponent ngOnInit - token ok", this.token);
      this.userService.getUserById()
        .subscribe(
          res => {
            console.log("::res:::> ", res);
            this.user = res;
          },
          err => {
            console.log(err)
          }
        )
      
    } else {
      this.router.navigate(['signin']);
    }

    this.xutilitiesService.getCommunities()
        .subscribe(
          res => {
            console.log('---------->',res)
            this.communities = res.communities;
          },
          err => {
            console.log("Err ProfileComponent", err)
          }
    )

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

  updateQuantity(productId:any, quantity:any, price:any, operator:any){
      let itemMod:any = {};

    //   this.item.productId = this.productId;
    // this.item.productName = this.product.name;
    // this.item.unitPrice = this.product.price;
    // this.item.subTotal = this.item.unitPrice * this.item.quantity;
    // this.item.operation = this.operator;

      itemMod.userId = this.user.id
      itemMod.productId = productId;
      itemMod.unitPrice = price;
      itemMod.quantity = 1
      // itemMod.subTotal = price * quantity;
      itemMod.operation = operator;
      console.log("itemmod", itemMod)
      this.shopService.addItem(itemMod)
      .subscribe(
        res => {
          console.log(res)
          // this.router.navigate(['profile']);
        },
        err => {
          console.log(err)
        } 
      )
    
  }

  updateAddress(){
    const address = req.body;
    const postalCode = "";
    const comminity = "";


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
