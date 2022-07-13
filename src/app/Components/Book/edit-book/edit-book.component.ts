import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/book.service';

export interface Books{
  titulo: string;
  autor: string;
  genero: string;
  editorial: string;
  precio: number;
  sinopsis: string;
  imagen:string,
}
@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  constructor(private _bookService:BookService) { }

  ngOnInit(): void {
  }

}
