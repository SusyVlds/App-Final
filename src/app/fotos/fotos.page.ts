import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { RegisterServiceService } from 'src/app/services/register-service.service';
import { Router } from '@angular/router';
import { FotosService } from '../services/fotos.service';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.page.html',
  styleUrls: ['./fotos.page.scss'],
})
export class FotosPage implements OnInit {
  
  selectedImage: any;
  user_id: any;

  photos: string[]=[]; //se crea el arreglo de fotos 

  constructor(private router: Router, private register: RegisterServiceService, private photosService:FotosService) { 
    this.photos=this.photosService.photos;
  }
    

  /*async getPicture(){
    this.selectedImage=null;
    const foto = await Camera.getPhoto({
      quality: 100,
      source: CameraSource.Prompt,
      width: 600, 
      resultType: CameraResultType.DataUrl,
    });
    console.log(foto);
    this.selectedImage = foto;
  }

  
  crearFoto(){
     this.register.crearFoto(this.user_id, this.selectedImage.DataUrl).subscribe(
      (response) => {
        console.log('Imagen enviada correctamente', response);
        this.router.navigate(['/profile']);
      }, 
      (error) => {
        console.error('Error al enviar la foto', error);
      }
     );
  }*/


  async takePhoto(){
    await this.photosService.addNewPhoto();
  }

  
  ngOnInit() {
  }

  perfil(){
    this.router.navigate(['/profile'])
  }

}
