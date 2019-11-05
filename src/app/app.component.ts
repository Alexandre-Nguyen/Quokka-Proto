import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'Quokka-Proto';

  innerWidth : number;
  innerHeight : number;

  qcolor : string;
  
  constructor() {}

  ngOnInit(){
    this.qcolor = "F5F5F5";
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
  }
}
