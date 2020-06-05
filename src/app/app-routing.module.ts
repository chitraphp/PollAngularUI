import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PollComponent } from './components/poll/poll.component';


const routes: Routes = [
  {path:'',component:PollComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
