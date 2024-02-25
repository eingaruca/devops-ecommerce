import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { FormsModule } from '@angular/forms';
import { XutilitiesService } from '../../../services/xutilities.service';
import { CommonModule } from '@angular/common';
import { ChangePasswordComponent } from '../../partials/change-password/change-password.component';
import { UserReviewsComponent } from '../../partials/user-reviews/user-reviews.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ChangePasswordComponent,
    UserReviewsComponent,
    RouterModule
  ],
  providers: [
    UserService,
    XutilitiesService,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  user: any = '';
  communities: any = [];
  token: any = "";
  headers: any;

  constructor(
    private router: Router,
    private userService: UserService,
    private xutilitiesService: XutilitiesService,
  ) {

  }

  ngOnInit(): void {
    this.getCommunities();
    this.getProfileLocalStorage();
  }

  updateProfile() {
    console.log("profilecomponent", this.user)
    this.user.id = this.user.email
    delete this.user.password
    return this.userService.updateProfile(this.user)
      .subscribe(
        res => {
          console.log(res)
          this.router.navigate(['index'])
        },
        err => {
          console.log(err);
          // this.router.navigate(['index'])
        }
      )

  }

  getCommunities() {
    this.xutilitiesService.getCommunities()
      .subscribe(
        res => {
          // console.log('---------->', res)
          this.communities = res.communities;
        },
        err => {
          console.log("Err ProfileComponent", err)
        }
      )
  }

  getProfileLocalStorage() {
    // if (typeof localStorage.getItem('token') !== 'undefined') {
    //   this.userService.getUserById()
    //     .subscribe(
    //       res => {
    //         this.user = res;
    //         console.log(this.user);
    //       },
    //       err => {
    //         console.log(err)
    //         // this.router.navigate(['index']);
    //       }
    //     )
    // } 

    if (typeof localStorage !== 'undefined') {
      this.userService.getUserById()
        .subscribe(
          res => {
            this.user = res;
            console.log(this.user);
          },
          err => {
            console.log(err)
            this.router.navigate(['signin']);
          }
        )
    } else {
      this.router.navigate(['signin']);
      console.log("Profilecomponent ngOnInit - localStorage undefined")
    }

  }

}