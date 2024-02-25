import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { XutilitiesService } from '../../../services/xutilities.service';

@Component({
  selector: 'app-user-reviews',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
  ],
  providers : [
    XutilitiesService
  ],
  templateUrl: './user-reviews.component.html',
  styleUrl: './user-reviews.component.css'
})
export class UserReviewsComponent implements OnInit{

  reviews:any = [];
  existReviews:boolean = false;

  constructor(
    private xutilitiesService: XutilitiesService
  ){}


  ngOnInit(): void {
    this.getReviews();
  }

  getReviews(){
    this.xutilitiesService.getReviewsByUser()
      .subscribe(
        res => {
          this.reviews = res;
          if( this.reviews ) this.existReviews = true
        },
        err => {
          console.log(err)
        }
      );
  }
}
