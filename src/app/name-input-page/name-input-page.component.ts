import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-name-input-page',
  templateUrl: './name-input-page.component.html',
  styleUrls: ['./name-input-page.component.css']
})
export class NameInputPageComponent {

  constructor(private router: Router) { }

  firstname= '';
  submitButtonAppear = false;
  nameSubmitted = false;

  onSubmit() {
    this.nameSubmitted = true;
    this.router.navigate(['/name-friend-input']);
    console.log(this.firstname);
  }

  change(event: any) {
    if (this.firstname != '') {
      this.submitButtonAppear = true;
    }
    if (this.firstname == '') {
      this.submitButtonAppear = false;
    }
  }

}
