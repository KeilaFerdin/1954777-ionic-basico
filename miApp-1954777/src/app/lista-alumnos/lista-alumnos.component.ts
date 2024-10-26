import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { IonList, IonItem, IonLabel, IonButton, IonCheckbox, IonInput, IonItemOptions, IonItemOption } from '@ionic/angular/standalone';
import { ActionSheetController } from '@ionic/angular/standalone';
import { Alumno } from 'interfaces/alumno.model'; 
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
  standalone: true,
  imports: [NgFor, IonList, IonItem, IonLabel, IonButton, IonCheckbox, IonInput, IonItemOptions, IonItemOption, FormsModule]
})
export class ListaAlumnosComponent implements OnInit {
  alumno: Alumno = {
    nombre: '',
    presente: false
  };

  alumnos: Alumno[] = [];

  constructor(private actionSheetController: ActionSheetController) {}

  ngOnInit() {}

  async eliminarAlumno(alumno: Alumno) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Confirmar',
      buttons: [
        {
          text: 'Eliminar',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log(`${alumno.nombre} Eliminado`);
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

  agregarAlumno() {
    if (this.alumno.nombre) {
      this.alumnos.push({ ...this.alumno }); // Agregar nuevo alumno
      this.alumno = { nombre: '', presente: false }; // Reiniciar formulario
    }
  }
}
