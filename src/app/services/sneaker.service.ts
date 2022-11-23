
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SneakerService {

    cart: Sneaker[] = []
    amountCart: number = 0;
    sneakers: Sneaker[] = [
        {
          id:1,
          img:'https://raw.githubusercontent.com/Nievas1000/Tp-angular/main/src/assets/img-releases/r1.jpg',
          brand:'adidas',
          name:'YEEZY BOOST 350 V2 FLAX',
          cantidad:1,
          price:200
        },
        {
          id:2,
          img:'https://raw.githubusercontent.com/Nievas1000/Tp-angular/main/src/assets/img-releases/r2.jpg',
          brand:'Nike',
          name:'TOM SACHS X NIKECRAFT GENERAL PURPOSE SHOE',
          cantidad:1,
          price:300
        },
        {
          id:3,
          img:'https://raw.githubusercontent.com/Nievas1000/Tp-angular/main/src/assets/img-releases/r3.jpg',
          brand:'Air Jordan',
          name:'AIR JORDAN 1 RETRO LOW OG UNC',
          cantidad:1,
          price:250
        },
        {
          id:4,
          img:'https://raw.githubusercontent.com/Nievas1000/Tp-angular/main/src/assets/img-releases/r4.jpg',
          brand:'Nike',
          name:'SOCIAL STATUS X AIR PENNY 2 PLAYGROUND - UNIVERSITY BLUE',
          cantidad:1,
          price:230
        },
        {
          id:5,
          img:'https://raw.githubusercontent.com/Nievas1000/Tp-angular/main/src/assets/img-releases/r5.jpg',
          brand:'Air Jordan',
          name:'SOCIAL STATUS X AIR PENNY 2 PLAYGROUND - BLACK',
          cantidad:1,
          price:350
        },
        {
          id:6,
          img:'https://raw.githubusercontent.com/Nievas1000/Tp-angular/main/src/assets/img-releases/r6.jpg',
          brand:'Nike',
          name:'AIR JORDAN 1 RETRO HIGH OG YELLOW TOE',
          cantidad:1,
          price:280
        },
        {
          id:7,
          img:'https://raw.githubusercontent.com/Nievas1000/Tp-angular/main/src/assets/img-releases/r7.jpg',
          brand:'Air Jordan',
          name:'WMNS DUNK LOW MAGMA ORANGE',
          cantidad:1,
          price:400
        },
        {
          id:8,
          img:'https://raw.githubusercontent.com/Nievas1000/Tp-angular/main/src/assets/img-releases/r8.jpg',
          brand:'adidas',
          name:'WMNS AIR JORDAN 1 RETRO HIGH OG DENIM',
          cantidad:1,
          price:230
        },
      ]

    constructor() { }
    
    addToCart(sneaker: Sneaker){
      let encontrado = false;
        this.cart.find(sne =>{
          if(sneaker.id === sne.id){
            encontrado = true;
          }
        })
        if(!encontrado){
          this.amountCart += sneaker.price;
          this.cart.push(sneaker);
        }
    }

    increaseAmount(sneaker: Sneaker){
        this.cart.find(sne =>{
          if(sneaker.id === sne.id){
            this.amountCart += sneaker.price;
            sne.cantidad++;
            return;
          }
        })
    }

    decreaseAmount(sneaker: Sneaker){
      this.cart.find(sne =>{
        if(sneaker.id === sne.id){
          if(sne.cantidad > 1){
            this.amountCart -= sneaker.price;
            sne.cantidad--;
          }
          return;
        }
      })
    }

    getSneaker(){
        return this.sneakers;
    }

    getCart(){
        return this.cart;
    }
}

export interface Sneaker{
    id:number;
    img: String;
    brand: String;
    name: String;
    cantidad:number;
    price:number;

}