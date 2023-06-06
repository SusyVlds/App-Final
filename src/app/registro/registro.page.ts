import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location, registerLocaleData } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { RegisterServiceService } from '../services/register-service.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  registerForm: FormGroup;

  constructor(private router: Router,
    private location: Location,
    private registerService: RegisterServiceService,
    private formBuilder: FormBuilder) {

    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],  //minimo seis caracteres
    });
  }

  register() {
    if (this.registerForm.valid) {
      const { name, email, password } = this.registerForm.value;
      this.registerService.resgister(name, email, password).subscribe(
        response => {
          console.log('Response:', response)      //se consume el servicio 
          this.router.navigate(['/login']);
        },
        error => {
          console.log('Error:', error)
        }
      ) 
      this.registerForm.reset();       //suscribe lo que consume del servicio, response lo que va a dar de respuesta, es donde se consume el servivo para validarlo 
    }
  }


  ngOnInit() {
  }

  loginGet() {
    this.router.navigate(['/login'])
  }

  homeGet() {
    this.router.navigate(['/home'])
  }

}

