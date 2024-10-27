import { Component, OnInit } from '@angular/core';
import { FotoserviceService } from '../foto-service.service'; 
import { IonicModule } from '@ionic/angular'; 

@Component({
  selector: 'app-camara',
  templateUrl: './camara.component.html',
  standalone: true, 
  styleUrls: ['./camara.component.scss'],
  imports: [IonicModule],
})
export class CamaraComponent implements OnInit {
  
  constructor(private fotoService: FotoserviceService) { }

  ngOnInit() {}

  tomarFoto() {
    this.fotoService.addNewToGallery(); 
  }
}
