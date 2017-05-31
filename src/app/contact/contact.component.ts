import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  items = [
    {class:'linkedin', img:'../../assets/img/linkedin.png', link:'https://www.linkedin.com/in/simonas-rugevicius-4267469b/'},
    {class:'facebook', img:'../../assets/img/facebook.png', link:'https://www.facebook.com/simas.rug'},
    {class:'instagram', img:'../../assets/img/instagram.png', link:'https://www.instagram.com/simasrug/'},
    {class:'twitter', img:'../../assets/img/twitter.png', link:'https://twitter.com/simasrug'},
    {class:'github', img:'../../assets/img/github.png', link:'https://github.com/SimasRug'},
    {class:'email', img:'../../assets/img/email.png', link:'mailto:simonas.rugevicius@gmail.com'},
  ];

  constructor() { }

  ngOnInit() {
  }

  onclick(link:string) {
    // console.log(link);
    window.open( link, '_blank' );
  }

}
