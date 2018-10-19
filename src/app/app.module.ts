import { NgPerfume, PerfumeModule, PerfumeAfterViewInit } from 'perfume.js/angular';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CorePerfumeModule } from './core/core-perfume.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CorePerfumeModule.forRoot(),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
