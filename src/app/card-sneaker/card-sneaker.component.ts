import { Component, Input, OnInit } from '@angular/core';
import { Sneaker, SneakerService } from '../services/sneaker.service';

@Component({
  selector: 'app-card-sneaker',
  templateUrl: './card-sneaker.component.html',
  styleUrls: ['./card-sneaker.component.css']
})
export class CardSneakerComponent implements OnInit {

  @Input() sneaker: any
  @Input() showButton: boolean = false

  constructor(private sneakerCartService: SneakerService) { }

  ngOnInit(): void {
  }

  addToCart(sneaker: Sneaker){
    this.sneakerCartService.addToCart(sneaker);
  }

}
