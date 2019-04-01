import { Component, ViewChild} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-nav-prueba',
  templateUrl: './nav-prueba.component.html',
  styles: [`
    .sidenav-container {
      height: 100%;
    }

    .sidenav {
      width: 200px;
      height: 100%;
    }

    .sidenav .mat-toolbar {
      background: inherit;
    }

    .mat-toolbar.mat-primary {
      position: sticky;
      top: 0;
      z-index: 1;
    }

  `]
})
export class NavPruebaComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

    @ViewChild('sidenav') sidenav: MatSidenav;

      reason = '';

      close(reason: string) {
        this.reason = reason;
        this.sidenav.close();
      }
  constructor(private breakpointObserver: BreakpointObserver) {}

}
