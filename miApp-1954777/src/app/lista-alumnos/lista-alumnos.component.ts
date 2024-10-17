import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
  standalone: true,
  imports: [NgFor, IonList, IonItem, IonLabel]
})
export class ListaAlumnosComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  alumnos: any = ["Carlos", "Ximena", 
    "Alberto", "Eduardo", "Baraba", "Georgina", "Kevin"];

}
