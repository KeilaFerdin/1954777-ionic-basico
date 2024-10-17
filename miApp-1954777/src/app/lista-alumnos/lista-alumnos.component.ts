import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { IonList, IonItem, IonLabel, IonItemSliding,IonItemOptions,IonItemOption} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { ActionSheetController } from '@ionic/angular/standalone';
@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
  standalone: true,
  imports: [NgFor, IonList, IonItem, IonLabel, IonItemSliding, IonItemOptions, IonItemOption]
})
export class ListaAlumnosComponent  implements OnInit {

  constructor(private actionSheetController:ActionSheetController) { }
  
  ngOnInit() {}
  
    async favoritos (alumno: string) {
      console.log(`${alumno} Favoritos`);
    }

    async eliminarAlumno(alumno: string) {
      const actionSheet = await this.actionSheetController.create({
      header: 'Confirmar',
      buttons: [
        {
          text: 'Eliminar',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log(`${alumno} Eliminado`);
            this.alumnos = this.alumnos.filter(a => a !== alumno);
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          icon: 'close',
          handler: () => {
            console.log('Cancelada');
          }
        }
      ]
    });
    await actionSheet.present();
    }

  alumnos: string[] = ["Carlos", "Ximena", 
    "Alberto", "Eduardo", "Baraba", "Georgina", "Kevin"];

}