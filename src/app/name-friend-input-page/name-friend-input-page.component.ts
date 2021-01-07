import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-name-friend-input-page',
  templateUrl: './name-friend-input-page.component.html',
  styleUrls: ['./name-friend-input-page.component.css']
})
export class NameFriendInputPageComponent {

  constructor(private router: Router) {}

  secondname= '';
  submitButtonAppear = false;
  nameSubmitted = false;

  onSubmit() {
    this.nameSubmitted = true;
    this.router.navigate(['/alice-vibe']);
    console.log(this.secondname);
  }

  change(event: any) {
    if (this.secondname != '') {
      this.submitButtonAppear = true;
    }
    if (this.secondname == '') {
      this.submitButtonAppear = false;
    }
  }
}
