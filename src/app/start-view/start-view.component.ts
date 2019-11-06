import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QDataService } from '../services/Qdata.service'

@Component({
  selector: 'app-start-view',
  templateUrl: './start-view.component.html',
  styleUrls: ['./start-view.component.scss']
})
export class StartViewComponent implements OnInit {

  bgQuokka : string;

  constructor(private qDataService : QDataService, private routes : Router) { }

  ngOnInit() {
    this.bgQuokka = this.qDataService.quokkaBgColor = "000000";
  }

  onStart() {
    this.routes.navigate(['talk']);
    //setTimeout(() => { this.routes.navigate(['talk']); }, 2000);
  }
}
