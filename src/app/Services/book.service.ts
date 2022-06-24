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
      imagen:'https://i0.wp.com/hipertextual.com/wp-content/uploads/2022/05/doctor_strange_en_el_multiverso_de_la_locura_sam_raimi_5.jpg?fit=1600%2C1067&quality=50&strip=all&ssl=1',
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

  agregarLibro(book: Books){
    this.listBooks.unshift(book);
  }

}
