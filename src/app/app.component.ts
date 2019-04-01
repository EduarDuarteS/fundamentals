import { Component, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'fundamentals';
  @ViewChild('drawer') sidenav: MatSidenav;
  close() {
    console.log("entro padre 1");
    this.sidenav.close();
    console.log("entro padre");
  }

}
