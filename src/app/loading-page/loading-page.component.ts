import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router'
import { QDataService } from '../services/Qdata.service'

@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.scss']
})
export class LoadingPageComponent implements OnInit {

  QQuotes : string;
  QQuotesTab : any[];
  QuoteIndex : number;

  constructor(private qDataService : QDataService, private routes : Router) { }

  ngOnInit() {

    this.QQuotesTab = this.qDataService.quokkaQuote;
    this.QuoteIndex = Math.floor(Math.random() * (this.QQuotesTab.length));
    this.QQuotes = this.QQuotesTab[this.QuoteIndex].text;

    //this.TaskIndex = Math.floor(Math.random() * (this.QTaskTab.length));

    setTimeout(() => { this.routes.navigate(['task']); }, 10000);
  }

}
