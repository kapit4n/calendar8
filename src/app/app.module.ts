import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { Month8Service } from './services/month8.service'
import { Month8Component } from "./components/month8/month8.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, Month8Component],
  imports: [BrowserModule, FormsModule],
  providers: [Month8Service],
  bootstrap: [AppComponent]
})
export class AppModule {}
