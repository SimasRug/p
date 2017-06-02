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
  about = {
    description:'Awesome coder even more awesome person. Frontend developer, who’s making the world better one code line at a time. Plays nice with others, very positive. Incredibly energetic, hardworking, radiates hustle and initiative.',
    education: [
      { school:'Kaunas University of Applied Science', subject:'Multimedia Technology', time:'September 2012 - June 2015' },
      { school:'Lillebaelt Academy', subject:'Multimedia design and communication', time:'January 2014 - December 2014' },
      { school:'Copenhagen School of Design and Technology', subject:'Web Development ', time:'January 2016 - June 2017' },
    ],
    levelsOfAwesome: [
      { tech:'HTML', skill:'95%', color:'#e34f26' },
      { tech:'CSS', skill:'87%', color:'#2965f1' },
      { tech:'JAVASCRIPT', skill:'95%', color:'#f0da50' },
      { tech:'ANGULARJS, IONIC', skill:'85%', color:'#c3002f' },
      { tech:'ANGULAR, IONIC2', skill:'80%', color:'#df2e31' },
      { tech:'TYPESCRIPT', skill:'80%', color:'#007acc' },
      { tech:'PHP', skill:'75%', color:'#777bb4' },
      { tech:'PHOTOSHOP', skill:'83%', color:'#120f2a' },
    ],
    hobbies: [
      {hobbie:'TECH AND GADGETS', img: '../../assets/img/tech.png'},
      {hobbie:'BASKETBALL', img: '../../assets/img/basketball.png'},
      {hobbie:'GAMES', img: '../../assets/img/games.png'},
      {hobbie:'BOARDGAMES', img: '../../assets/img/boardgames.png'},
      {hobbie:'ADVENTURES', img: '../../assets/img/adventures.png'},
      {hobbie:'MOVIES', img: '../../assets/img/movies.png'},
    ]
  }


  constructor() { }

  ngOnInit() {
  }

  onclick(link:string) {
    window.open( link, '_blank' );
  }
  ngAfterViewInit(){

    console.log(this.about.levelsOfAwesome);
  }



}
