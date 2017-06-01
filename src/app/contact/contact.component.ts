import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
innerHeight:any;
innerWidth: any;
innerHalfHeight: any;
  firstItems = [
    {class:'linkedin', img:'../../assets/img/linkedin.png', link:'https://www.linkedin.com/in/simonas-rugevicius-4267469b/'},
    {class:'facebook', img:'../../assets/img/facebook.png', link:'https://www.facebook.com/simas.rug'},
    {class:'instagram', img:'../../assets/img/instagram.png', link:'https://www.instagram.com/simasrug/'}
  ];
  secondItems = [
    {class:'twitter', img:'../../assets/img/twitter.png', link:'https://twitter.com/simasrug'},
    {class:'github', img:'../../assets/img/github.png', link:'https://github.com/SimasRug'},
    {class:'email', img:'../../assets/img/email.png', link:'mailto:simonas.rugevicius@gmail.com'},
  ];

  constructor() {
    this.innerHeight = (window.screen.height);
    this.innerWidth = (window.screen.width);
    console.log(this.innerHeight, this.innerWidth);
    this.innerHalfHeight = (this.innerHeight/2)-54;
    console.log(this.innerHalfHeight);

  }

  ngOnInit() {
  }

  onclick(link:string) {
    window.open( link, '_blank' );
  }

}
