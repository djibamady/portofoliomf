import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  techno = false;
  exep = false;
  onClickafficherJava() {
    this.techno = !this.techno;
  }
   onClickafficherExperience() {
    this.exep = !this.exep;
   }
}
