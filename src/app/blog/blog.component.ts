import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  selectedIndex = 1;

  constructor() { }

  images: any[] = [
    {
      img:'../../assets/img/blog1.jpg',
      title:'ON RUNNING CLOUDMONSTER LUMOS',
      description:'We tested the new Lumos collection and the ON Running Cloudmonster Lumos during a run through Düsseldorf and thus started our AFEW Sports Club. “Get weird in the Dark” is the motto of the new campaign for the ON Running Cloudmonster Lumos. Here, an innovative look meets outstanding performance and technology, in true ON fashion. […]'
    },
    {
      img:'../../assets/img/blog2.jpg',
      title:'REEBOK DUSTY WAREHOUSE PACK',
      description:'After the success of the first Dusty Warehouse concept by Reebok, now follows another Dusty Warehouse Pack. The concept is continued in the second season and continues to convince with the design of artificial obsolescence. Thus, the shoe looks as if it had lain untouched in a shoe box since the 80s. This feeling of […]'
    },
    {
      img:'../../assets/img/blog3.jpg',
      title:'AIR JORDAN 4 RETRO SE “BLACK CANVAS”',
      description:'First released in 1989, the Air Jordan 4 Retro SE “Black Canvas” is a popular all-rounder. Since then, it has not only inspired sneaker lovers but also makes it into the shoe closets of the masses. The new edition impresses again with its design. The upper is made of canvas, just like its predecessors. Despite […]'
    },
    {
      img:'../../assets/img/blog4.jpg',
      title:'AFEW GOODS YAMASURA „DAWN“',
      description:'Just over a year after the release of Afew Goods’ first runner, the Yamasura “Soil”, the release of the second colorway of the in-house silhouette is set for October 1: the Yamasura “Dawn”. The inspiration The release of the “Soil” was a resounding success for Afew Goods. Our design was well-received among sneaker enthusiasts, and […]'
    },
  ]

  ngOnInit(): void {
  }

  selectImage(index: number){
    if(index > 0 && index <= this.images.length){
      this.selectedIndex = index;
    }else{
      return
    }
  }
}
