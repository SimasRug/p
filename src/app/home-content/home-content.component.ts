import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {

  items = [
    {title:'About', link: '/about', img:"../../assets/img/temp-logo.png", class:'about'},
    {title:'Work', link: '/work', img:'../../assets/img/temp-logo.png', class:'work'},
    {title:'Contact', link: '/contact', img:'../../assets/img/temp-logo.png', class:'contact'}];
  constructor(public router: Router) { }

  ngOnInit() {
  }
  onclick(route: string) {
     this.router.navigate([route]);
  }

}
