import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFabButton, IonButton, IonFab, IonIcon } from '@ionic/angular/standalone';
import { ListaAlumnosComponent } from '../lista-alumnos/lista-alumnos.component'; 
import { ProductosComponent } from '../productos/productos.component';
import { CamaraComponent } from '../camara/camara.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ListaAlumnosComponent, ProductosComponent, CamaraComponent, IonFabButton, IonButton, IonFab, IonIcon],
})
export class HomePage {
  constructor() {}
}
