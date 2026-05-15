import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from './shared/shared.module';
import { TranslationService } from './_services/translation.service';
import { HttpClientModule } from '@angular/common/http';
import { BuildCompareComponent } from './pages/build-compare/build-compare.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuildCompareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [TranslationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
