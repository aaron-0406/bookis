import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBookComponent } from './Components/Book/create-book/create-book.component';
import { DetailsBookComponent } from './Components/Book/details-book/details-book.component';
import { EditBookComponent } from './Components/Book/edit-book/edit-book.component';
import { ListBookComponent } from './Components/Book/list-book/list-book.component';
import { PaymentFormComponent } from './Components/Payment/payment-form/payment-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/booksList', pathMatch: 'full' },
  // Books
  { path:'booksList',component: ListBookComponent},
  { path:'newBook',component: CreateBookComponent},
  { path:'edit/:id',component: EditBookComponent},
  { path:'pago',component: PaymentFormComponent},
  { path:'detalles',component: DetailsBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
