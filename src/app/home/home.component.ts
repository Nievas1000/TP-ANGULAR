import { Component, OnInit } from '@angular/core';
import { Sneaker, SneakerService } from '../services/sneaker.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sneakers: Sneaker[] = []
  amountCart: number = 0;
  
  constructor(private sneakerCartService: SneakerService) { }


  ngOnInit(): void {
    this.sneakers = this.sneakerCartService.getSneaker();
    this.amountCart = this.sneakerCartService.amountCart;
  }



}
