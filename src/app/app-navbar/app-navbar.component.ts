import { Component, OnInit, ViewChild } from '@angular/core';
import { CartModalComponent } from '../cart-modal/cart-modal.component';

@Component({
  selector: 'app-app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {

  show: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showModal(){
    this.show = !this.show;
  }

}
