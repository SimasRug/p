import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit {
  socialIcons = [
    {class:'linkedin', img:'../../assets/img/linkedin-color.png', link:'https://www.linkedin.com/in/simonas-rugevicius-4267469b/'},
    {class:'facebook', img:'../../assets/img/facebook-color.png', link:'https://www.facebook.com/simas.rug'},
    {class:'instagram', img:'../../assets/img/instagram-color.png', link:'https://www.instagram.com/simasrug/'},
    {class:'twitter', img:'../../assets/img/twitter-color.png', link:'https://twitter.com/simasrug'},
    {class:'github', img:'../../assets/img/github-color.png', link:'https://github.com/SimasRug'},
    {class:'email', img:'../../assets/img/email-color.png', link:'mailto:simonas.rugevicius@gmail.com'},
  ]
  test = 25;
  testOne = '0%';

  constructor() { }

  ngOnInit() {
  }

  onclick(link:string) {
    window.open( link, '_blank' );
  }
  ngAfterViewInit(){
    setTimeout(()=>{
      this.testOne = '45%';
    },3000)
  }



}
