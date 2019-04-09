import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-tarjeta',
  templateUrl: './child-tarjeta.component.html',
  styles: [`
    .card-width {
      max-width: 300px;
    }
    .image-cover {
      background-size: cover;

      .spacer {
        flex: 1 1 auto;
      }
    }`]
  })
  export class ChildTarjetaComponent implements OnInit {
    @Input() cardsInput: any;
    @Output() childOuputBtnLeft = new EventEmitter();
    @Output() childOuputBtnRigh = new EventEmitter();

    someProperty: any= "Child property";
    clickCardBtnRigth(){
      this.childOuputBtnRigh.emit(this.cardsInput.cardTitle);
    }
    clickCardBtnLeft(){
      this.childOuputBtnLeft.emit(this.cardsInput.cardSubtitle);
    }

    public metodoChild(){
      console.log('print of child metod '+ this.cardsInput.cardTitle);
      this.someProperty = this.cardsInput.cardTitle;
    }

    constructor() { }
    ngOnInit() {
    }


  }
