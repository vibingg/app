import { Component } from '@angular/core';

@Component({
  selector: 'app-name-input-page',
  templateUrl: './name-input-page.component.html',
  styleUrls: ['./name-input-page.component.css']
})
export class NameInputPageComponent {
  firstname= '';
  submitButtonAppear = false;
  nameSubmitted = false;

  onSubmit() {
    this.nameSubmitted = true;
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
