import { Component, Input, OnInit } from '@angular/core';
import { Sneaker, SneakerService } from '../services/sneaker.service';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.css']
})
export class CartModalComponent implements OnInit {

  @Input() show: any
  sneakers: Sneaker[]=[]
  amountCart: number = 0;

  constructor(public sneakerCartService: SneakerService) { }

  ngOnInit(): void {
    console.log(this.sneakerCartService.amountCart)
    this.sneakers = this.sneakerCartService.getCart();
  }

  hideModal(){
    this.show = false;
  }

  increaseAmount(sneaker: Sneaker){
    this.sneakerCartService.increaseAmount(sneaker);
  }

  decreaseAmount(sneaker: Sneaker){
    this.sneakerCartService.decreaseAmount(sneaker);
  }
}
