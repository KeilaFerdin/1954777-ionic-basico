import { Component, OnInit } from '@angular/core';
import { FotoserviceService } from '../foto-service.service'; 
import { IonicModule } from '@ionic/angular'; 
import { Foto } from '../foto.model'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.component.html',
  standalone: true, 
  styleUrls: ['./camara.component.scss'],
  imports: [IonicModule, CommonModule],
})
export class CamaraComponent implements OnInit {
  
  public fotos: Foto[] = [];

  constructor(private fotoService: FotoserviceService) { }

  ngOnInit() {
    this.fotos = this.fotoService.fotos;
  }

  tomarFoto() {
    this.fotoService.addNewToGallery().then(() => {
      this.fotos = this.fotoService.fotos;
    });
  }
}
