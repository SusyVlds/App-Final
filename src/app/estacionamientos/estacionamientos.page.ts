import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-estacionamientos',
  templateUrl: './estacionamientos.page.html',
  styleUrls: ['./estacionamientos.page.scss'],
})
export class EstacionamientosPage implements OnInit {

  constructor(private router: Router, private location: Location) { }

  ngOnInit() {
  }

  profile(){
    this.router.navigate(['/profile'])
  }

  esta1(){
    this.router.navigate(['/estacionamientos/esta-centro'])
  }

}
