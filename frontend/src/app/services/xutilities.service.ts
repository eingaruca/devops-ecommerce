import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class XutilitiesService {
  private URL ='http://localhost:8004'

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Articles
   */
  getArticles(){
    return this.http.get<any>(this.URL + `/articles`);
  }

  getArticleById(id:any){
    return this.http.get<any>(this.URL + `/articles/${id}`);
  }

  /**
   * Cities
   */

  getCommunities(){
    return this.http.get<any>(this.URL + `/communities`)
  }
  /**
   * Brand
   */
  getBrands () {
    return this.http.get<any>(this.URL + `/brands`)
  }

  /**
   * Reviews
   */

  getReviewsByProduct(productId:any){
    return this.http.get<any>(this.URL + `/reviews/product/${productId}`);
  }

  // createReview(productId:any, newReview:any){
  //   return this.http.post<any>(this.URL + `/reviews/product/${productId}`, newReview);
  // }
  createReview(productId:any, newReview:any){
    console.log("KKKKKKKKKKK", productId)
    console.log("KKKKKKKKKKK", newReview)
    return this.http.post<any>(this.URL + `/reviews/product/${productId}`, newReview);
  }

  /**
   * Category
   */
  getCategory () {
    
  }
}
