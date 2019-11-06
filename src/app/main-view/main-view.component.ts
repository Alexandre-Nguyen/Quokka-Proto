import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { QDataService } from '../services/Qdata.service'
import { Router } from '@angular/router'
import * as $ from 'jquery';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  QTextTabStart : any[];
  QTextTabQuote : any[];
  Qtext : string;
  
  TextIndex : number;

  constructor(private qDataService : QDataService, private routes : Router) { 
    
  }

  ngOnInit() {
    this.TextIndex = 0;

    this.QTextTabStart = this.qDataService.quokkaQuoteStart;
    this.QTextTabQuote = this.qDataService.quokkaQuote;

    this.Qtext = this.QTextTabStart[this.TextIndex].text;
    $("body").css({"background-color" : "#F5F5F5"});
  }

  onNext() {
    if (this.TextIndex + 1 < this.QTextTabStart.length) {
      this.TextIndex++;
      this.Qtext = this.QTextTabStart[this.TextIndex].text;
    }
    else {
      $("body").css({"background-color" : "#152345"});
      this.routes.navigate(['loading']);
    }
  }
}
