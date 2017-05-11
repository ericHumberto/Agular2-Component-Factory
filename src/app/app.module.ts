import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import DynamicComponent from './dynamic-component';
import HelloWorldComponent from './hello-world-component';
import WorldHelloComponent from './world-hello-component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicComponent,
    HelloWorldComponent,
    WorldHelloComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
