import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/Services/book.service';
import { Books } from '../list-book/list-book.component';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css'],
})
export class CreateBookComponent implements OnInit {
  acto = 'Crear';
  genero: any[] = [
    'Thriller/Suspense',
    'Romance',
    'Horror',
    'Ciencia Ficción/Fantasía',
    'Crimen y Misterio',
    'Comedia',
  ];
  form: FormGroup;
  private _router: any;

  constructor(
    private fb: FormBuilder,
    private _bookService: BookService,
    private rutaBooks: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group({
      titulo: ['', Validators.required],
      autor: ['', Validators.required],
      imagen: ['', Validators.required],
      genero: ['', Validators.required],
      editorial: ['', Validators.required],
      precio: ['', Validators.required],
      sinopsis: ['', Validators.required],
    });
  }
  index: number = this.rutaBooks.snapshot.params['id'];

  ngOnInit(): void {
    this.esEditar;
    if (this.accion === false) {
      this.acto = 'Editar';
    }
  }

  bookCreado: Books = {
    id: '',
    titulo: '',
    autor: '',
    genero: '',
    editorial: '',
    precio: 0,
    sinopsis: '',
    imagen: '',
  };

  //para identificar 'editarNew'
  accion: boolean = this._bookService.listBooks[this.index - 1] ? false : true;

  esEditar() {
    if (this.index === 0) {
      this.acto = 'Editar';
    }
  }

  bookMostrar: Books = this._bookService.listBooks[this.index - 1]
    ? this._bookService.listBooks[this.index - 1]
    : this.bookCreado;

  agregarLibro() {
    const book: Books = {
      id:this.form.value.id,
      titulo: this.form.value.titulo,
      autor: this.form.value.autor,
      imagen: this.form.value.imagen,
      genero: this.form.value.genero,
      editorial: this.form.value.editorial,
      precio: this.form.value.precio,
      sinopsis: this.form.value.sinopsis,
    };
    this._bookService.agregarLibro(book);
    this.router.navigate(['/booksList']);
  }
  editarLibro() {
    this._bookService.editarLibro(this.bookMostrar);
    this._router.navigate(['/listBooks']);
  }
}
