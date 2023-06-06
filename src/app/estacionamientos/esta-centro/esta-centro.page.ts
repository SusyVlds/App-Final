import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-esta-centro',
  templateUrl: './esta-centro.page.html',
  styleUrls: ['./esta-centro.page.scss'],
})
export class EstaCentroPage implements OnInit {

  constructor(private router: Router, private location: Location) { }


  ngOnInit() {
  }

  estacionamientos(){
    this.router.navigate(['/estacionamientos'])
  }

  esta1(){
    this.router.navigate(['/estacionamientos/esta-centro'])
  }

  async seeLocation(){
    await Browser.open({ url: 'https://goo.gl/maps/YCFEsoN8LcoH8DaEA?coh=178573&entry=tt' });
  }
}
