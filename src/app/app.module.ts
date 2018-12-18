import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BaseInterceptor } from '@core/base.interceptor';
import { CorePerfumeModule } from '@core/core-perfume.module';
import { SharedModule } from '@shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoPageComponent } from './pages/demo-page/demo-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CorePerfumeModule.forRoot(),
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BaseInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
