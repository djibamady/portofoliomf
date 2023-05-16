import { Component } from '@angular/core';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent {
constructor() { }
  menu_icon_variable: boolean = false;
  menuVariable: boolean = false;
  ngOnInit(): void {
  }
  openMenu() {
    this.menuVariable =! this.menuVariable;
    this.menu_icon_variable =! this.menu_icon_variable;
  }
}
