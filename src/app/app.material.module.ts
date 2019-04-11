import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatCheckboxModule} from '@angular/material';
import { MatToolbarModule, MatButtonModule,  MatSidenavModule,
  MatIconModule, MatListModule, MatTabsModule }
  from '@angular/material';

    @NgModule({
    imports: [MatButtonModule, MatCheckboxModule,
      MatToolbarModule, BrowserAnimationsModule,
      MatButtonModule,  MatSidenavModule,
      MatIconModule,    MatListModule, MatTabsModule
    ],
    exports: [MatButtonModule, MatCheckboxModule,
      MatToolbarModule, BrowserAnimationsModule,
      MatButtonModule,  MatSidenavModule,
      MatIconModule,    MatListModule, MatTabsModule
    ],
  })
  export class MaterialModule { }
