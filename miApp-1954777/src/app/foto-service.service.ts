import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Foto } from './foto.model'; 

@Injectable({
  providedIn: 'root'
})
export class FotoserviceService {
  public fotos: Foto[] = []; // Variable para almacenar las fotos

  public async addNewToGallery() {
    // Toma la foto usando la cámara
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    
    if (capturedPhoto && capturedPhoto.webPath) {
   
      this.fotos.unshift({
        filepath: 'img_' + new Date().getTime() + '.jpeg', // Nombre único para la imagen
        webViewPath: capturedPhoto.webPath // Ruta de la imagen
      });
    } else {
      console.error('Error al capturar la foto');
    }
  }
}
