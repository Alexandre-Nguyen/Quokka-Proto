import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainViewComponent } from './main-view/main-view.component';
import { LoadingPageComponent } from './loading-page/loading-page.component';
import { QuokkaTaskComponent } from './quokka-task/quokka-task.component';
import { QDataService } from './services/Qdata.service';
import { RouterModule } from '@angular/router';
import { StartViewComponent } from './start-view/start-view.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    QuokkaTaskComponent,
    LoadingPageComponent,
    StartViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule
  ],
  providers: [QDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
