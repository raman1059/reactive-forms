import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent {

  constructor(private router: Router) { }

  // ngOnInit() {
  //   // console.log("GitHubProfile OnInit")

  //   // let id = this.route.snapshot.paramMap.get('id');
  //   // console.log(id);
    
  //   // this.route.paramMap
  //   // .subscribe(params => {
  //   // let id = +params.get('id');     // + converts the string to a number.
  //   // console.log(id);
  //   // })

  // }
  submit() {
    this.router.navigate(['/followers'], {
      queryParams: { page:1, order: 'newest'}
    });
  }

}
