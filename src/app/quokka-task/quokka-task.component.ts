import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { QDataService } from '../services/Qdata.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-quokka-task',
  templateUrl: './quokka-task.component.html',
  styleUrls: ['./quokka-task.component.scss']
})
export class QuokkaTaskComponent implements OnInit {

  QTask : string;
  QHashtag : string;
  QTaskTab : any[];
  QTaskPass : number[];
  TaskIndex : number;
  TaskCounter : number;
  isTaskValidate : boolean;
  QDate = new Date();

  constructor(private qDataService : QDataService, private routes : Router) {
  }

  refreashTask() {
    this.QTaskTab.splice(this.TaskIndex, 1);
    this.TaskIndex = Math.floor(Math.random() * (this.QTaskTab.length));
    this.QTask = this.QTaskTab[this.TaskIndex].title;
    this.QHashtag = this.QTaskTab[this.TaskIndex].hashtag;
    
  }

  ngOnInit() {
    this.isTaskValidate = false;
    this.TaskCounter = 1;
    this.QTaskTab = this.qDataService.quokkaTask.slice(0);
    this.TaskIndex = Math.floor(Math.random() * (this.QTaskTab.length));
    this.QTask = this.QTaskTab[this.TaskIndex].title;
    this.QHashtag = this.QTaskTab[this.TaskIndex].hashtag;
  }

  validateTask() {
    this.isTaskValidate = true;
    this.QTask = "Challenge accepted, good luck pal ! See you during your next break ! ";
    this.QHashtag = "";
    setTimeout(() => { this.routes.navigate(['']); }, 3000);
  }

  cancelTask(){
    if (this.TaskCounter < 3) {
      this.refreashTask();
      this.TaskCounter++;
    }
    else {
      this.isTaskValidate = true;
      this.QHashtag = "";
      this.QTask = "I will find you a better task next time, see you for the next break.";
      setTimeout(() => { this.routes.navigate(['']); }, 3000);
    }
  }
}
