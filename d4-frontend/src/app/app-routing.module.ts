import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BuildCompareComponent } from './pages/build-compare/build-compare.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'build-compare', component: BuildCompareComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
