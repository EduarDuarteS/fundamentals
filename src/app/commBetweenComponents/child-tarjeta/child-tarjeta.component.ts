import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-tarjeta',
  templateUrl: './child-tarjeta.component.html',
  styles: [`
    .example-card {
    max-width: 300px;
  }

  .example-header-image {
    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');
    background-size: cover;
  }`]
})
export class ChildTarjetaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  evento = {
    id: 1,
    name: 'Conference Mac',
    date: '14/02/86',
    time: '10:00 am',
    price: 250000,
    imageUrl: 'https://www.panorama.com.ve/__export/1493040430239/sites/panorama/img/cienciaytecnologia/2017/04/24/tecnologia.jpg_390504426.jpg',
    location:{
      address: 'kr 56 # 151 - 51',
      city: 'Bogotá',
      country: 'Colombia'
    }
  };

}
