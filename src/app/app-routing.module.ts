import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBookComponent } from './Components/Book/create-book/create-book.component';
import { EditBookComponent } from './Components/Book/edit-book/edit-book.component';
import { ListBookComponent } from './Components/Book/list-book/list-book.component';

const routes: Routes = [
  { path: '', redirectTo: '/booksList', pathMatch: 'full' },
  // Books
  { path:'booksList',component: ListBookComponent},
  { path:'newBook',component: CreateBookComponent},
  { path:'edit/:id',component: EditBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
