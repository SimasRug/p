import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit, Sanitizer } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {


  innerHeight:any;
  innerWidth: any;
  innerHalfHeight: any;

  images= {
    code: '../../assets/img/code.png',
    design: '../../assets/img/design.png',
    d: '../../assets/img/3d.png',
    video: '../../assets/img/video.png',
    test: '../../assets/img/test.jpg'
  };

  projects = {
    code:[
       { title:'Calculator', description:'A calculator application made with Angular 1', img:'../assets/img/projects/code/calculator.png', link:'../assets/work/calculator/index.html' },
       { title:'Pomodoro Clock', description:'Pomodoro clock application developed with Angular 1', img:'../assets/img/projects/code/pomodoro.png', link:'../assets/work/pomodoro/index.html' },
       { title:'Tic Tac Toe', description:'Tic Tac Toe game where you play against AI made with Angular 1', img:'../assets/img/projects/code/tictac.png', link:'../assets/work/tictac/index.html' },
       { title:'Driving Game', description:'A top down driving game developed using pure Javascript and HTML Canvas', img:'../assets/img/projects/code/driving.png', link:'../assets/work/CarGame/index.html'  },
       { title:'Weather Application', description:'An application that shows the weather in your current area, made by using weather and location Api\'s and jquery', img:'../assets/img/projects/code/weather.png', link:'../assets/work/Weather/index.html' },
       { title:'Wikipedia Reader', description:'A application that lets you search for Wikipedia articles, developed with wikipedia Api and jquery', img:'../assets/img/projects/code/viki.png', link:'../assets/work/vikipedia_reader/index.html' },
       { title:'Ping Pong', description:'A classic ping pong game made with pure Javascript and HTML Canvas', img:'../assets/img/projects/code/pingpong.png', link:'../assets/work/PingPong.html' },
       { title:'Brick Breaker', description:'Another classic game developed with HTML Canvas and Javascript', img:'../assets/img/projects/code/brickbreaker.png', link:'../assets/work/BrickBreaker.html' },
       { title:'E-Shop', description:'A school project, usign Wordpress and various plugins a E-shop was developed', img:'../assets/img/projects/code/igalerija.png', link:'http://igalerija.andriekuspaulius.com/' },
       { title:'Bleeper', description:'A school project, made a twitter copy usign Jquery', img:'../assets/img/projects/code/bleeper.png',link:'../assets/work/Bleeper/'  },
       { title:'Drone Prject', description:'A school project for DOM manipulation usifn Jquery', img:'../assets/img/projects/code/drone.png', link:'../assets/work/Drone/' },
       { title:'Old Portfolio', description:'Previous portfolio project using Boostrap and Jquery', img:'../assets/img/projects/code/old.png', link:'../assets/work/public_html/' },
        { title:'Portfolio', description:'Current portfolio project made using Angular 4 and Bootstrap 4', img:'../assets/img/projects/code/portfolio.png', link:'/home' }
    ],
    designs: [
      { title:'Yeti', description:'A drawing of a yeti using Adobe Illiustrator', img:'../../assets/img/projects/design/yeti.png' },
      { title:'Small Town', description:'A illiustration off a small town usign Adobe Illiustrator', img:'../../assets/img/projects/design/town.png' },
      { title:'Work Room', description:'An image of a small cozy workspace, made using Abode Illiustrator', img:'../../assets/img/projects/design/room.jpg' }
    ],
    d: [
      { title: '3D room',  description:'A room modeled and rendered using 3DS MAX', img:'../../assets/img/projects/d/room1.jpg' },
      { title: '',  description:'', img:'../../assets/img/projects/d/room2.jpg' },
      { title: '',  description:'', img:'../../assets/img/projects/d/room3.jpg' },
      { title: '',  description:'', img:'../../assets/img/projects/d/room4.jpg' },
      { title: '',  description:'', img:'../../assets/img/projects/d/room5.jpg' },
      { title: '',  description:'', img:'../../assets/img/projects/d/room6.jpg' },
      { title: '',  description:'', img:'../../assets/img/projects/d/room7.jpg' },
      { title: '',  description:'', img:'../../assets/img/projects/d/room8.jpg' },
    ],
    video: [
      { title: 'A short story',  description:'A school project written, shot and acted by me and fellow studets', link:'//youtube.com/embed/QLKDGpgqizg?rel=0' },
       {title: 'DSIO basketball',  description:'A short video promoting DSIO basketball club', link:'//www.youtube.com/embed/GnQ2_eCbuUc'},
       { title: 'Flares',  description:'Flare animation using Adobe After Effects',link:'//www.youtube.com/embed/8ZNVDkYyNeg'}
    ]
  };
  constructor( public sanitizer: DomSanitizer, public router: Router) {
    this.innerHeight = (window.screen.height);
    this.innerWidth = (window.screen.width);
    console.log(this.innerHeight, this.innerWidth);
    this.innerHalfHeight = (this.innerHeight/2)-54;
    console.log(this.innerHalfHeight);
   }


  ngOnInit() {
  }
  photoURL(link: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(link);
  }
  onClick(link: string){
    window.open( link, '_blank' );
    console.log(link);

  }

}
