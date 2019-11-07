import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { QDataService } from '../services/Qdata.service'
import { Router } from '@angular/router'
import * as $ from 'jquery';

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
  QMainColor : string;
  QSdColor : string;

  constructor(private qDataService : QDataService, private routes : Router) {
  }

  refreashTask() {
    this.QTaskTab.splice(this.TaskIndex, 1);
    this.TaskIndex = Math.floor(Math.random() * (this.QTaskTab.length));
    this.QTask = this.QTaskTab[this.TaskIndex].title;
    this.QHashtag = this.QTaskTab[this.TaskIndex].hashtag;
    this.setColor(this.QTaskTab[this.TaskIndex].category);
    $("body").css({"background-color" : this.QMainColor});
    //console.log("col--->" + this.QSdColor);
    //console.log(this.getTextTaskColor());
    //$("#task").css({"color": this.QSdColor});
    //$("#htag").css({"color": this.QSdColor});
  }

  setColor(cat){
    switch(cat) {
      case "PhysicalActivity": {
        this.QMainColor = this.qDataService.quokkaBgColorTab[0].mainColor;
        this.QSdColor = this.qDataService.quokkaBgColorTab[0].sdColor;
        break;
      }
      case "LearningSthingNew": {
        this.QMainColor = this.qDataService.quokkaBgColorTab[1].mainColor;
        this.QSdColor = this.qDataService.quokkaBgColorTab[1].sdColor;
        break;
      }
      case "PlayingAGame": {
        this.QMainColor = this.qDataService.quokkaBgColorTab[2].mainColor;
        this.QSdColor = this.qDataService.quokkaBgColorTab[2].sdColor;
        break;
      }
      case "Meditation": {
        this.QMainColor = this.qDataService.quokkaBgColorTab[3].mainColor;
        this.QSdColor = this.qDataService.quokkaBgColorTab[3].sdColor;
        break;
      }
      case "HelpAndInteract": {
        this.QMainColor = this.qDataService.quokkaBgColorTab[4].mainColor;
        this.QSdColor = this.qDataService.quokkaBgColorTab[4].sdColor;
        break;
      }
      case "SetNewGoal": {
        this.QMainColor = this.qDataService.quokkaBgColorTab[5].mainColor;
        this.QSdColor = this.qDataService.quokkaBgColorTab[5].sdColor;
        break;
      }
    }
  }

  ngOnInit() {
    this.isTaskValidate = false;
    this.TaskCounter = 1;
    this.QTaskTab = this.qDataService.quokkaTask.slice(0);
    this.TaskIndex = Math.floor(Math.random() * (this.QTaskTab.length));
    this.QTask = this.QTaskTab[this.TaskIndex].title;
    this.QHashtag = this.QTaskTab[this.TaskIndex].hashtag;
    this.setColor(this.QTaskTab[this.TaskIndex].category);

    $("body").css({"background-color" : this.QMainColor});
  }

  getTextTaskColor(){
    return (this.QSdColor);
  }

  validateTask() {
    $("body").css({"background-color" : "#F5F5F5"});
    this.isTaskValidate = true;
    this.QTask = "Challenge accepted, good luck pal ! See you during your next break ! ";
    this.QHashtag = "";
    setTimeout(() => { this.routes.navigate(['']); }, 7000);
  }

  cancelTask(){
    if (this.TaskCounter < 3) {
      this.refreashTask();
      this.TaskCounter++;
    }
    else {
      $("body").css({"background-color" : "#F5F5F5"});
      this.isTaskValidate = true;
      this.QHashtag = "";
      this.QTask = "Sorry to see you go champ, next time we will find a challenge worthy of you";
      setTimeout(() => { this.routes.navigate(['']); }, 7000);
    }
  }
}
