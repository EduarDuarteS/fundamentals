import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { ChildTarjetaComponent } from './child-tarjeta/child-tarjeta.component'
import { ParentOutputComponent } from './parent-output/parent-output.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations:[
    ChildTarjetaComponent,
    ParentOutputComponent,

  ],
  imports:[
    MatCardModule,
    MatButtonModule,
    BrowserModule,
    RouterModule.forChild([
      {path: 'childTarjet', component: ChildTarjetaComponent},
      {path: 'parentOuput', component: ParentOutputComponent}
    ]),
  ]
})
export class CommBetweenCompModule{}
