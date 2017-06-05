import { Component, OnInit } from '@angular/core';

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
  constructor() {
    this.innerHeight = (window.screen.height);
    this.innerWidth = (window.screen.width);
    console.log(this.innerHeight, this.innerWidth);
    this.innerHalfHeight = (this.innerHeight/2)-54;
    console.log(this.innerHalfHeight);
   }


  ngOnInit() {
  }

}
