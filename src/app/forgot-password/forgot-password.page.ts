import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';       //navegar cambiar de página
import { Location, registerLocaleData } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { RegisterServiceService } from '../services/register-service.service';
import { AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  email: any;      //se declara la variable email de cualquier tipo 

  constructor(private router: Router,
    private location: Location,
    private registerService: RegisterServiceService,    //nombre del objeto      contiene todos los objetos    usar todos los elementos
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    //@Inject(EmailComposer) private emailComposer: EmailComposer
    private navCtrl: NavController) {

  }

  ngOnInit() {
  }

  loginGet() {
    this.router.navigate(['/login'])
  }

  homeGet() {
    this.router.navigate(['/home'])
  }

  /*newPassword() {
    //llamamos al metodo que contiene la ruta del servicio en laravel y le pasamos como parametro el email del html
    this.registerService.newPassword(this.email).subscribe(async response => {

      if (response.new_password == undefined) {
        console.log("Email ingresado incorrecto");
        const alert = await this.alertController.create({ //Crea el mensaje de advertencia
          header: 'Email',
          message: `El correo ingresado es incorrecto`,
          buttons: ['OK']
        });
        await alert.present();
      }
      else {
        console.log(response.message);
        console.log("Nueva Contraseña " + response.new_password);
        this.router.navigate(['/login']);
        const alert = await this.alertController.create({
          header: 'Nueva contraseña',
          message: `Tu nueva contraseña es: ` + response.new_password,
          buttons: ['OK']
        });
        await alert.present();
      }

    }
    );
    this.email = null;
  }*/

  newPassword() {
    //llamamos al metodo que contiene la ruta del servicio en laravel y le pasamos como parametro el email del html
    this.registerService.newPassword(this.email).subscribe(async response => {

      console.log(response.new_password);
      //cuando el resultado del response sea indefinido quiere decir que no existe ningun usuario
      if (response.new_password == undefined) {
        const alert = await this.alertController.create({
          header: 'Contraseña no actualizada',
          message: `El email ingresado no le corresponde a ningun usuario`,
          buttons: ['OK']
        });
        await alert.present();
        this.router.navigate(['/forgot-password']);
      }
      else {
        //const newPassword = response.new_password; // Obtener el valor de new_password
        //creamos una alerta para cuando se actualice correctamente la contraseña
        const alert = await this.alertController.create({
          header: 'Contraseña actualizada correctamente',
          message: `Nueva contraseña: ` + response.new_password,
          buttons: ['OK']
        });
        await alert.present();

        //FORMATO PARA MANDAR CORREO
        const emailUrl = "mailto:" + this.email + "?subject=Nueva contraseña para la app de LOVARA&body=Su nueva contraseña es: " + response.new_password;
        //maito es a quién va dirigido el correo
        //subject es el asunto del correo
        //body es el cuerpo del correo (el mensaje a mandar)

        //ABRIMOS UNA VENTANA CON EL FORMATO ANTERIOR
        window.open(emailUrl, '_system');


        console.log('Email enviado ');

        this.router.navigate(['/login']);
      }

    },
      //creamos una alerta para cuando no se actualice correctamente la contraseña
      async (error) => {
        const alert = await this.alertController.create({
          header: 'Error',
          message: error.error.message,
          buttons: ['OK']
        });
        await alert.present();
      }
    );
  }
}