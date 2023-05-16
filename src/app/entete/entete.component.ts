import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entete',
  templateUrl: './entete.component.html',
  styleUrls: ['./entete.component.css']
})
export class EnteteComponent implements OnInit {
ngOnInit(): void {
    console.log('Componente de registro cargado');
}
  showMenu = false;
  noShow = false;
  mediaQuery = window.matchMedia('max-width: 767px');

  toggleMenu() {
    this.showMenu = !this.showMenu;
    this.noShow = true;
  }
   noShowI() {
     this.noShow = !this.noShow;
     this.showMenu =  true;
   }






}
