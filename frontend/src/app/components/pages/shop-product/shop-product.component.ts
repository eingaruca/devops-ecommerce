import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductReviewComponent } from '../../partials/product-review/product-review.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shop-product',
  standalone: true,
  imports: [
    ProductReviewComponent,
    CommonModule,
  ],
  providers : [
    ProductService
  ],
  templateUrl: './shop-product.component.html',
  styleUrl: './shop-product.component.css'
})
export class ShopProductComponent implements OnInit{
  
  product:any = {}
  productId: string | null = null;

  constructor (
    private productService:ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {

  }


  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this.productId = params['id'];
      }
    )
    this.productService.getProductsbyId(this.productId)
        .subscribe(
          res => {
            this.product = res;
          },
          err => {
            console.log(err)
          }
        )
  }
  

}
