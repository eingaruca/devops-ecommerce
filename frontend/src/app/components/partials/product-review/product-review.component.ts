import { Component, OnInit } from '@angular/core';
import { XutilitiesService } from '../../../services/xutilities.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { list } from '@angular/fire/database'

@Component({
  selector: 'app-product-review',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    // Firestore
    
  ],
  providers: [
    XutilitiesService
  ],
  templateUrl: './product-review.component.html',
  styleUrl: './product-review.component.css'
})
export class ProductReviewComponent implements OnInit{

  productId:string | null = null;
  reviews:any = [];
  newReview:any ={};

  /**
   * Variables para imágenes
   * selectedFile: File = null;
   * fd = new FormData();
   */
  selectedFile: File | null = null;;
  fd = new FormData();
  /** */
  constructor(
    private xutilitiesService:XutilitiesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this.productId = params['id'];
      }
    )

    this.xutilitiesService.getReviewsByProduct(this.productId)
      .subscribe(
        res =>{
          this.reviews = res.reviews;
        },
        err => {
          console.log(err);
        }
      )


  }

  submitReview(){
    console.log('=>=>=>=>=> ', this.newReview);
    return this.xutilitiesService.createReview(this.productId, this.newReview)
            .subscribe(
              res => {
                console.log(res);                
                // window.location.reload();
              },
              err => {
                console.log(err)
              }
            )
  }

  createFormData(event:any) {
    this.selectedFile = <File>event.target.files[0];
    this.fd.append('file', this.selectedFile, this.selectedFile.name);
    console.log('=> ', this.selectedFile)
    this.newReview.image = this.fd
    
  }

}
// https://medium.com/angular-chile/subir-archivos-a-firebase-cloud-storage-con-angular-7-d735d5dbfa53
// 