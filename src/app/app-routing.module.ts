import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainViewComponent } from 'src/app/main-view/main-view.component';
import { QuokkaTaskComponent } from 'src/app/quokka-task/quokka-task.component';
import { LoadingPageComponent } from './loading-page/loading-page.component';

const routes: Routes = [
  { path: '', component : MainViewComponent },
  { path: 'task', component :  QuokkaTaskComponent },
  { path: 'loading', component : LoadingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
