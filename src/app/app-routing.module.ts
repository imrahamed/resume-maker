import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResumeLayoutComponent } from './resume-layout/resume-layout.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'resume/:id',
    component: ResumeLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
