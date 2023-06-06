import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RegisterServiceService } from 'src/app/services/register-service.service';
import { AlertController, ToastController } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { FotosService } from 'src/app/services/fotos.service';
//import { error } from 'console';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})



export class ProfilePage implements OnInit {

  user: any;
  id_user: any;

  photos: string[]=[];
  selectedImage: any | null = null;

  constructor(private router: Router, private register: RegisterServiceService, private alertController: AlertController,
    private toastCtrl: ToastController, private photosService:FotosService) { 
      this.photos=this.photosService.photos;
    }

  ngOnInit() {
    this.id_user = localStorage.getItem('id_user')
    if (this.register.isLoggedIn()) {
      this.register.getCurrentUser(this.id_user).subscribe(
        (response) => {
          this.user = response.data;
          console.log('El usuario logeado es>', this.user)
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.router.navigate(['/login']);
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  logout() {
    this.register.logout().subscribe(
      async (response: any) => {
        console.log(response);
        localStorage.setItem('access_token', response.token)

        console.log('Sesión cerrada correctamente');
        this.presentToast('Sesion cerrada correctamente');
        /*const alert = await this.alertController.create({
          header: 'Sesión cerrada',
          //message: `Sesión cerrada `,
          buttons: ['OK']
        });
        await alert.present();*/
        this.router.navigate(['/home']);
      });
  }

  async getPicture(){
    this.selectedImage = null; 

    const image = await Camera.getPhoto({
      quality: 100,
      source: CameraSource.Prompt,
      resultType: CameraResultType.DataUrl,
    });
    console.log(image);

    const imageUrl: any = image.dataUrl;  //se obtine la url de la imagen 

    this.selectedImage = imageUrl;
    const previewImageElement = document.getElementById('avatar-img') as HTMLImageElement;  //la foto se coloca en la etiqueta con el id 
    if(previewImageElement){  //se verifica que el elemento con el id mencionado existe
      this.register.crearFoto(this.id_user, this.selectedImage).subscribe((response) => {
        console.log('Imagen enviada exitosamente', response);
        previewImageElement.src = imageUrl;  //si existe se coloca la imagen 
      },
      (error) => {
        console.log('Error al enviar la imagen', error);
      }
      );
      
    }
  }
  

  /*crearFoto(){
    this.register.crearFoto(this.id_user, this.selectedImage.DataUrl).subscribe((response) => {
      console.log('Imagen enviada exitosamente', response);
      this.router.navigate(['/profile']);
    },
    (error) => {
      console.log('Error al enviar la imagen', error);
    }
    );
  }*/

  async takePhoto(){
    await this.photosService.addNewPhoto();
  }

  estacionamientos() {
    this.router.navigate(['/estacionamientos'])
  }

  foto() {
    this.router.navigate(['/fotos'])
  }

}

