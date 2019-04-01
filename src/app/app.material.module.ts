import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatCheckboxModule} from '@angular/material';
import { MatToolbarModule, MatButtonModule,  MatSidenavModule,
  MatIconModule, MatListModule }
  from '@angular/material';

    @NgModule({
    imports: [MatButtonModule, MatCheckboxModule,
      MatToolbarModule, BrowserAnimationsModule,
      MatButtonModule,  MatSidenavModule,
      MatIconModule,    MatListModule
    ],
    exports: [MatButtonModule, MatCheckboxModule,
      MatToolbarModule, BrowserAnimationsModule,
      MatButtonModule,  MatSidenavModule,
      MatIconModule,    MatListModule
    ],
  })
  export class MaterialModule { }
