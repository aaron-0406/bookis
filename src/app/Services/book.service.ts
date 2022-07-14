import { Injectable } from '@angular/core';
import { Books } from '../Components/Book/list-book/list-book.component';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  listBooks: Books[] = [
    {
      id: '1',
      titulo: 'La República Empresarial.',
      autor: 'Cosamalón, Jesús; Durand, Francisco',
      genero: 'Humanidades',
      editorial: 'Derrama Magisterial',
      precio: 59,
      sinopsis:
        '¿Qué circunstancias permitieron el encumbramiento del anti estatismo y el libre mercado?',
      imagen: '../../../../assets/images/1.jpg',
    },

    {
      id: '2',
      titulo: 'La lucha por la libertad.',
      autor: 'Rosas Lauro, Claudia',
      genero: 'Humanidades',
      editorial: 'Derrama Magisterial',
      precio: 59,
      sinopsis:
        '¿Cómo entender la fundación de nuestra república, cuyo bicentenario ahora conmemoramos?',
      imagen: '../../../../assets/images/2.jpg',
    },

    {
      id: '3',
      titulo: 'App Kid.',
      autor: 'Sayman, Michael',
      genero: 'Humanidades',
      editorial: 'Vintage Español',
      precio: 89,
      sinopsis: 'Emprendedor por naturaleza e hijo de inmigrantes hispanos',
      imagen: '../../../../assets/images/3.jpg',
    },
    {
      id: '4',
      titulo: 'Infocracia.',
      autor: 'Han, Byung-Chul',
      genero: 'Humanidades',
      editorial: 'TAURUS',
      precio: 69,
      sinopsis: 'La digitalización avanza inexorablemente. ',
      imagen: '../../../../assets/images/4.jpg',
    },

    {
      id: '5',
      titulo:
        'TODO LO QUE LAS RELACIONES PUBLICAS PUEDEN HACER POR TI... Y NO LO SABIAS.',
      autor: 'Vega Benavides, Úrsula',
      genero: 'Humanidades',
      editorial: 'PAIDÓS',
      precio: 59.99,
      sinopsis:
        'Con un Estilo Fresco y Didáctico, Anécdotas Propias y Testimonios de Empresarios',
      imagen: '../../../../assets/images/5.jpg',
    },

    {
      id: '6',
      titulo: 'Emprendimiento y liderazgo femenino en el Perú.',
      autor: 'AA. VV.',
      genero: 'Humanidades',
      editorial: 'Smart Book',
      precio: 49,
      sinopsis:
        'Este libro abarca la historia de trece mujeres quienes, sobre la base del esfuerzo y capacidad',
      imagen: 'a../../../../assets/images/6.jpg',
    },

    {
      id: '7',
      titulo: 'El Fraude del Siglo.',
      autor: 'Wright, Tom; Hope, Bradley',
      genero: 'Humanidades',
      editorial: 'CONECTA',
      precio: 79,
      sinopsis:
        'Cómo un Joven Empresario Logró Estafar Más de 5 Mil Millones de Dólares',
      imagen: '../../../../assets/images/7.jpg',
    },

    {
      id: '8',
      titulo: 'Vender en Internet. las Claves del Éxito.',
      autor: 'Escribano Arrechea, Javier',
      genero: 'Empresa',
      editorial: 'ANAYA MULTIMEDIA',
      precio: 149,
      sinopsis: 'Las claves del éxito con la tecnología',
      imagen: '../../../../assets/images/8.jpg',
    },

    {
      id: '9',
      titulo: 'Creación de Empresas. Guía del Emprendedor.',
      autor: 'González, Francisco José',
      genero: 'Empresa',
      editorial: 'PIRÁMIDE',
      precio: 149,
      sinopsis: 'Emprendedor para gestión',
      imagen: '../../../../assets/images/9.jpg',
    },

    {
      id: '10',
      titulo: '¿Qué Futuro Nos Espera?.',
      autor: 'Delgado Zegarra, Jaime',
      genero: 'Empresa',
      editorial: 'SOLVIMA GRAF',
      precio: 26,
      sinopsis:
        'Promueve que las Personas Desarrollen una Cultura Previsional para Así Asegurar Su Futuro',
      imagen: '../../../../assets/images/10.jpg',
    },

    {
      id: '11',
      titulo: 'Ser mujer en el Perú.',
      autor: 'Ñopo, Hugo; Miró Quesada Gayoso, Josefina',
      genero: 'Ciencias',
      editorial: 'PLANETA',
      precio: 49.99,
      sinopsis:
        'Con una mezcla rara de abundante información y precisión analítica',
      imagen: '../../../../assets/images/11.jpg',
    },

    {
      id: '12',
      titulo: '¡Hasta el Infinito y Más Allá! Pixar a Través de Sus Películas.',
      autor: 'Pastor, Doc',
      genero: 'Artes',
      editorial: 'DOLMEN EDITORIAL',
      precio: 79,
      sinopsis:
        'Pixar Es Sinónimo de Buen Cine, de Animación de Calidad, de Historias con Fondo',
      imagen: '../../../../assets/images/12.jpg',
    },

    {
      id: '13',
      titulo: 'Cuerpo Humano - Dvd.',
      autor: 'Parker,Steve',
      genero: 'Medicina',
      editorial: 'DK',
      precio: 159,
      sinopsis:
        'Un Libro que Ha Roto los Esquemas, y Muestra el Interior de Nuestro Cuerpo como Jamás lo Haya Ud. Visto.',
      imagen: '../../../../assets/images/13.jpg',
    },

    {
      id: '14',
      titulo: 'Los Nuevos Incas',
      autor: 'Parker,Steve',
      genero: 'Ciencias',
      editorial: 'IEP',
      precio: 159,
      sinopsis:
        'Desarrollo Rural Es al Mismo Tiempo un Proyecto, un Deseo y una Ideología Política.',
      imagen: '../../../../assets/images/14.jpg',
    },

    {
      id: '15',
      titulo: 'Discursos del bicentenario',
      autor: 'Asensio, Raúl H.',
      genero: 'Ciencias',
      editorial: 'PLANETA',
      precio: 99.99,
      sinopsis:
        'A fines del 2020, a puertas del bicentenario de nuestra independencia, el Perú vivía un momento especialmente complicado y convulso',
      imagen: '../../../../assets/images/15.jpg',
    }
  ];

  constructor() {}

  getBooks() {
    return this.listBooks.slice();
  }

  agregarLibro(book: Books) {
    this.listBooks.unshift(book);
  }

  editarLibro(libroEditar: Books) {
    const listaLibrosModificados = this.listBooks.map((books: Books) => {
      if (books.id === libroEditar.id) {
        return libroEditar;
      }

      return books;
    });

    this.listBooks = listaLibrosModificados;
  }
  eliminarBooks(i: number) {
    this.listBooks.splice(i, 1);
  }
}
