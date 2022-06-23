import { Injectable } from '@angular/core';
import { Books } from '../Components/Book/list-book/list-book.component';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  listBooks:Books[] = [
    {
      titulo: 'Insomnio',
      autor: 'autor1',
      genero: 'dramatico',
      editorial: 'editorial lo que sea',
      precio: 125,
      sinopsis: 'Esta es una breve descripcion acerca del libro bla bla bla bla bla bla bla bla bla bla bla bla bla bla',
      imagen:'assets/images/insomnio.jpg',
    },
    {
      titulo: 'Insomnio',
      autor: 'autor1',
      genero: 'dramatico',
      editorial: 'editorial lo que sea',
      precio: 125,
      sinopsis: 'Esta es una breve descripcion acerca del libro bla bla bla bla bla bla bla bla bla bla bla bla bla bla',
      imagen:'assets/images/insomnio.jpg',
    },
    {
      titulo: 'Insomnio',
      autor: 'autor1',
      genero: 'dramatico',
      editorial: 'editorial lo que sea',
      precio: 125,
      sinopsis: 'Esta es una breve descripcion acerca del libro bla bla bla bla bla bla bla bla bla bla bla bla bla bla',
      imagen:'assets/images/insomnio.jpg',
    }
  ]

  constructor() { }

  getBooks() {
    return this.listBooks.slice();
  }
}
