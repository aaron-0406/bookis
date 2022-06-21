import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateBookComponent } from './Book/create-book/create-book.component';
import { EditBookComponent } from './Components/Book/edit-book/edit-book.component';
import { ListBookComponent } from './Components/Book/list-book/list-book.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateBookComponent,
    EditBookComponent,
    ListBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
