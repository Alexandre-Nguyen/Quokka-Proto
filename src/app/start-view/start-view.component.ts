import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QDataService } from '../services/Qdata.service'
import * as $ from 'jquery';

@Component({
  selector: 'app-start-view',
  templateUrl: './start-view.component.html',
  styleUrls: ['./start-view.component.scss']
})
export class StartViewComponent implements OnInit {

  bgQuokka : string;

  constructor(private qDataService : QDataService, private routes : Router) { }

  ngOnInit() {
    $("body").css({"background-color" : "#152345"});
    //this.bgQuokka = this.qDataService.quokkaBgColor = "000000";
  }

  onStart() {
    this.routes.navigate(['talk']);
    //setTimeout(() => { this.routes.navigate(['talk']); }, 2000);
  }
}
