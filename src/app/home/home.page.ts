import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private location: Location) { }

  registroGet(){
    this.router.navigate(['/registro'])
  }

  logInGet(){
    this.router.navigate(['/login'])
  }

}
