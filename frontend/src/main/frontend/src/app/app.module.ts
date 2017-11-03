import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {AppComponent} from './app.component';
import {RegisterComponent} from "./components/register/register.component";

import {HttpService} from "./services/register.service";
import {TranslateModule} from "../../node_modules/ng2-translate"


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    TranslateModule.forRoot()
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
