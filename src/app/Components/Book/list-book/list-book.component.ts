import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/Services/book.service';

export interface Books {
  titulo: string;
  autor: string;
  genero: string;
  editorial: string;
  precio: number;
  sinopsis: string;
  imagen:string,
}
@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css'],
})
export class ListBookComponent implements OnInit {
  listBooks: Books[] = [
    {
      titulo: 'Insomnio',
      autor: 'autor1',
      genero: 'dramatico',
      editorial: 'editorial lo que sea',
      precio: 125,
      sinopsis: 'Esta es una breve descripcion acerca del libro bla bla bla bla bla bla bla bla bla bla bla bla bla bla',
      imagen:'assets/images/insomnio.jpg',
    },
  ];

  constructor(private _bookService:BookService) {}

  ngOnInit(): void {
    this.cargarBooks();
  }

  bookMostrar:Books = this._bookService.listBooks[0];

  cargarBooks() {
    this.listBooks = this._bookService.getBooks();
  }

  eliminarBooks(i:number) {
    console.log(i);

  this._bookService.eliminarBooks(i);
  this.cargarBooks();
  }
}
