import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})

export class CreateBookComponent implements OnInit {
  genero: any[] = ['Thriller/Suspense', 'Romance', 'Horror', 'Ciencia Ficción/Fantasía', 'Crimen y Misterio', 'Comedia']
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      titulo: ['', Validators.required],
      autor: ['', Validators.required],
      img: ['', Validators.required],
      genero: ['', Validators.required],
      editorial: ['', Validators.required],
      precio: ['', Validators.required],
      sinopsis: ['', Validators.required],
    })
   }

  ngOnInit(): void {
  }

  agregarLibro() {
    console.log(this.form);
  }


}
