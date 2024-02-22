import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  private URL = 'http://localhost:8003'

  constructor(private http: HttpClient) { 

  }

  // createProduct(product:any) {
  //   console.log('serviceprod', product)
  //   return this.http.post<any>(this.URL, product);
  // }

  // getProducts(){
  //   return this.http.get<any>(this.URL);
  // }

  // Orders
      // router.get('/cart', orderController.getCart);
      // router.get('/orders-status', orderController.getOrderByStatus);
      // router.post('/createCart', orderController.createCart);
      // router.put('/changeOrderStatus', orderController.changeOrderStatus);
      
  getCart(){

    
    return this.http.get<any>(this.URL + `/cart`, { headers });
  }
  createCart(order:any){
    return this.http.post<any>(this.URL + `/createCart`, order);
  }

  // Items
      // router.post('/addItem', itemController.addItemToCart);
      // router.post('/cleanItemsToCart', itemController.cleanItemsToCart)
      // router.get('/getItem/:id', itemController.getItem);
      // router.get('/listItems', itemController.listItems);
      // router.delete('/deleteItem/:id', itemController.deleteItem)
  addItem(item:any){
    return this.http.post<any>(this.URL + `/addItem`, item);
  }

  // Shipping

  // Payments
      // router.get('/getPaymentByUser', paymentController.getPaymentsByUser);
      // router.get('/getPaymentByOrder', paymentController.getPaymentsByOrder);
      // router.get('/getPaymentById/:id', paymentController.getPaymentsById);
      // router.post('/createPayment', paymentController.createPayment);
      // router.put('/updatePayment/:id', paymentController.updatePayment);
}
