import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private URL = 'http://localhost:8001'

  constructor(private http: HttpClient) { 

  }

  createProduct(product:any) {
    return this.http.post<any>(this.URL, product);
  }

  getProducts(){
    return this.http.get<any>(this.URL);
  }

  getBrands(){
    return this.http.get<any>(this.URL + '/brands');
  }

  getProductsbyId(id: any){
    console.log("product.service.ts - getProductsbyId")
    const urlnew = this.URL + `/${id}`
    console.log("product.service.ts", urlnew)
    return this.http.get<any>(urlnew);
  }

  // router.post('/', productController.createProduct);
  // router.get('/', productController.getProducts); getProducts
  // router.get('/brands', productController.getBrands);
  // router.get('/:id', productController.getProductById);
  // router.get('/category/:category', productController.getProductsByCategory);
  // router.put('/update', productController.updateProduct);
}