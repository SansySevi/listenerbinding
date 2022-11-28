import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  public personajes!: Array<any>;

  constructor() {
    this.personajes = [
      { nombre: "Barrel", imagen: "img1.png", 
      detalles: "Lleva puesto un disfraz de esqueleto. Es muy torpe. Su piel es pálida y con los ojos marcados. Lleva consigo una careta a juego con su disfraz que se adapta perfectamente a su cara." },
      { nombre: "Lock", imagen: "img2.png", 
      detalles: "Lleva puesto un disfraz de demonio. Tiene la piel azulada, pálida, con labios azules y ojos amarillos. Lleva consigo una careta a juego con su disfraz que se adapta perfectamente a su cara." },
      { nombre: "Jack", imagen: "img3.png", 
      detalles: 'Jack Skellington es un personaje principal conocido como "El Rey Calabaza", "El Rey de la Oscuridad" o "El Rey del Mal" de Ciudad Halloween' },
      { nombre: "Sally", imagen: "img4.png", 
      detalles: "Ella es una muñeca de trapo humanoide creada por el Dr. Finkelstein. Está hecha de varias piezas cosidas juntas, con hojas muertas que se usan como relleno. Jefe creación del médico, ella siempre está bajo llave." },
    ]
  }

  ngOnInit(): void {
  }

}
