import { Component, OnInit } from '@angular/core';
import { BreedsService } from '../../shared/breeds.service'

@Component({
  selector: 'app-parent-output',
  templateUrl: './parent-output.component.html',
  styles: [`

    .hCard {
        max-height: 600px;
    },
    `
]
})
export class ParentOutputComponent implements OnInit {

  breeds:any[];
  constructor( private breedsService: BreedsService) {
  }
  ngOnInit() {
    this.breeds = this.breedsService.getAllBreeds();
  }

  clickChildLeft(display: string){
    console.log(display)
  }
  clickChildRight(display: string){
    console.log(display)
  }
}
