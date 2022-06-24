import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from 'src/app/Services/book.service';
import { Books} from '../list-book/list-book.component';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})

export class CreateBookComponent implements OnInit {
  genero: any[] = ['Thriller/Suspense', 'Romance', 'Horror', 'Ciencia Ficción/Fantasía', 'Crimen y Misterio', 'Comedia']
  form: FormGroup;

  constructor(private fb: FormBuilder, private  _bookService: BookService) {
    this.form = this.fb.group({
      titulo: ['', Validators.required],
      autor: ['', Validators.required],
      imagen: ['', Validators.required],
      genero: ['', Validators.required],
      editorial: ['', Validators.required],
      precio: ['', Validators.required],
      sinopsis: ['', Validators.required],
    })
   }

  ngOnInit(): void {
  }

  agregarLibro() {

    const book: Books = {
      titulo: this.form.value.titulo,
      autor: this.form.value.autor,
      imagen: this.form.value.imagen,
      genero: this.form.value.genero,
      editorial: this.form.value.editorial,
      precio: this.form.value.precio,
      sinopsis: this.form.value.sinopsis,
    }

    this._bookService.agregarLibro(book);
    console.log(book);
    
  }


}
