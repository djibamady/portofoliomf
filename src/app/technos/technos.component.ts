import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-technos',
  templateUrl: './technos.component.html',
  styleUrls: ['./technos.component.css']
})
export class TechnosComponent {
  afficherJava = false;
  afficherPhp = false;
  afficherJavaee = false;
  afficherPython = false;
  afficherAngular = false;
  afficherSymfony = false;

  onClickafficherJava() {

    this.afficherJava = !this.afficherJava;
    this.afficherPhp = false;
    this.afficherJavaee = false;
    this.afficherPython = false;
    this.afficherAngular = false;
    this.afficherSymfony = false;
  }
  onClickafficherPhp() {

    this.afficherPhp = !this.afficherPhp;
    this.afficherJavaee = false;
    this.afficherJava = false;
    this.afficherPython = false;
    this.afficherAngular = false;
    this.afficherSymfony = false;

  }
  onClickafficherJavaee() {

    this.afficherJavaee = !this.afficherJavaee;
    this.afficherJava = false;
    this.afficherPhp = false;
    this.afficherPython = false;
    this.afficherAngular = false;
    this.afficherSymfony = false;

  }
   onClickafficherPython() {
    this.afficherPython = !this.afficherPython;
    this.afficherAngular = false;
    this.afficherSymfony = false;
    this.afficherJava =false;
    this.afficherPhp = false;
    this.afficherJavaee = false;
  }
  onClickafficherAngular() {
    this.afficherPython = false;
    this.afficherAngular = !this.afficherAngular;
    this.afficherSymfony = false;
    this.afficherPhp = false;
    this.afficherJavaee = false;
    this.afficherJava = false;

  }
  onClickafficherSymfony() {
 this.afficherPython = false;
    this.afficherAngular = false;
    this.afficherSymfony = !this.afficherSymfony;
    this.afficherJavaee = false;
    this.afficherJava = false;
    this.afficherPhp = false;

    }


  constructor(private router: Router) {

 }
}
