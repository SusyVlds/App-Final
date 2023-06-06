import { Injectable } from '@angular/core';
import { async } from '@angular/core/testing';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';


@Injectable({
  providedIn: 'root'
})


export class FotosService {

  photos: string[]=[]; //se crea el arreglo de fotos

  constructor() { }

  async addNewPhoto() {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
    if (photo.webPath) {
      this.photos.unshift(photo.webPath);   //se valida la ruta
    }
  }

}

