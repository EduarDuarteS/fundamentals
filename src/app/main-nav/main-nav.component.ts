import { Component, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
// import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
  @ViewChild('drawer') sidenav: MatSidenav;
  cerrar=false;
  close() {
    console.log("entro 1");
    this.sidenav.close();
    console.log("entro 2");
  }
  // isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  // .pipe(
  //   map(result => result.matches)
  // );

  // constructor(private breakpointObserver: BreakpointObserver) {}
  constructor() {}

  onBackdropClick(){
    this.close();
  }
  display(){

    this.cerrar=!this.cerrar;
    console.log(this.cerrar);
  }
}
