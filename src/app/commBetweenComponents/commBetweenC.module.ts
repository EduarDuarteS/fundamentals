import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ChildTarjetaComponent } from './child-tarjeta/child-tarjeta.component'
import { ParentOutputComponent } from './parent-output/parent-output.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations:[
    ChildTarjetaComponent,
    ParentOutputComponent,

  ],
  imports:[
    MatCardModule,
    RouterModule.forChild([
      {path: 'childTarjet', component: ChildTarjetaComponent},
      {path: 'parentOuput', component: ParentOutputComponent}
    ]),
  ]
})
export class CommBetweenCompModule{}
