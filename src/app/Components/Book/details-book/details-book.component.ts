import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/book.service';
import { ListBookComponent } from '../list-book/list-book.component';
export interface Books {
  id:string;
  titulo: string;
  autor: string;
  genero: string;
  editorial: string;
  precio: number;
  sinopsis: string;
  imagen:string,
}
@Component({
  selector: 'app-details-book',
  templateUrl: './details-book.component.html',
  styleUrls: ['./details-book.component.css']
})
export class DetailsBookComponent implements OnInit {

  listBooks: Books[] = [
    {
      id:'1',
      titulo: 'Insomnio',
      autor: 'autor1',
      genero: 'dramatico',
      editorial: 'editorial lo que sea',
      precio: 125,
      sinopsis: 'Esta es una breve descripcion acerca del libro bla bla bla bla bla bla bla bla bla bla bla bla bla bla',
      imagen:'assets/images/insomnio.jpg',
    },
  ];

  bookMostrar:Books = this._bookService.listBooks[0];
  constructor(private _bookService:BookService) { }



  ngOnInit(): void {
    this.cargarBooks();
  }

  cargarBooks() {
    this.listBooks = this._bookService.getBooks();
  }

}
