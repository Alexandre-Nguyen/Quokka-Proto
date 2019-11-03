import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.scss']
})
export class LoadingPageComponent implements OnInit {

  constructor(private routes : Router) { }

  ngOnInit() {
    setTimeout(() => { this.routes.navigate(['task']); }, 3000);
  }

}
