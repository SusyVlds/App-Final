import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { RegisterServiceService } from 'src/app/services/register-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  LoginForm: FormGroup;
  constructor(private router: Router, private location: Location, private formBuilder: FormBuilder, 
    private alertController: AlertController,  private register: RegisterServiceService, private toastCtrl: ToastController) {
    
      this.LoginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  login(){
    this.register.login(this.LoginForm.get('email')?.value, this.LoginForm.get('password')?.value).subscribe(
      async (response: any)  => {
        console.log(response);
        localStorage.setItem('access_token',response.token)    
        localStorage.setItem('id_user',response.data.id)
        console.log('Se inicio sesión correctamente');
        this.presentToast('Se inicio sesion correctamente');
        this.router.navigate(['/profile']);
      },
      async (error) => {
        const alert = await this.alertController.create({
          header: 'Error',
          message: error.error.message,
          buttons: ['OK']
        });
        await alert.present();
        this.presentToast('No se ha iniciado sesion');
      }
    );
    this.LoginForm.reset();
  }

  ngOnInit() {
  }

  registroGet(){
    this.router.navigate(['/registro'])
  }

  homeGet(){
    this.router.navigate(['/home'])
  }

  passwordGet(){
    this.router.navigate(['/forgot-password'])
  }

  logInGet(){
    this.router.navigate(['/login'])
  }

}

//localstorage se le asigna el token del usuario 