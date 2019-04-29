import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdMobileModule, Toast } from 'ng-zorro-antd-mobile';
import { AppRoutingModule } from './app-routing.module';
import { HttpBaseService } from '../shared/common/http-service';
import { AppComponent } from './app.component';
import { ApiService } from 'src/shared/common/api-service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdMobileModule,
    AppRoutingModule
  ],
  providers: [
    HttpBaseService,
    ApiService,
    Toast
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }