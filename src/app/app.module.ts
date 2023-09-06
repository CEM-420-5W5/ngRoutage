import { Enfant2Component } from './components/enfant2/enfant2.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { Enfant1Component } from './components/enfant1/enfant1.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    Enfant1Component,
    Enfant2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
