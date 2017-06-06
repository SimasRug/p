import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';


@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css'],
})
export class HomeContentComponent implements OnInit {

  test: boolean = false;
  test1: boolean = true

  items = [
    {title:'About', link: '/about', img:"../../assets/img/about.png", class:'about'},
    {title:'Projects', link: '/projects', img:'../../assets/img/gear.png', class:'work'},
    {title:'Contact', link: '/contact', img:'../../assets/img/contact.png', class:'contact'}];
  constructor(public router: Router) { }

  ngOnInit() {
  }
  onclick(route: string) {
     this.router.navigate([route]);
  }

   mouseOn(){
     this.test = true;
     this.test1 = false;
   }
    mouseOff(){
     this.test = false;
     this.test1 = true;
   }

}
