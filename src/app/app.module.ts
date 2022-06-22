import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';

//Book
import { CreateBookComponent } from './Components/Book/create-book/create-book.component';
import { EditBookComponent } from './Components/Book/edit-book/edit-book.component';
import { ListBookComponent } from './Components/Book/list-book/list-book.component';





@NgModule({
  declarations: [
    AppComponent,
    CreateBookComponent,
    EditBookComponent,
    ListBookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
