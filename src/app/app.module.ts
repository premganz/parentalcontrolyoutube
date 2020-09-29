import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EmbedVideo } from 'ngx-embed-video';
import { HttpClientModule } from '@angular/common/http';
import {BasicTableComponent} from './table.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, EmbedVideo.forRoot()],
  declarations: [ AppComponent, HelloComponent, BasicTableComponent  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
