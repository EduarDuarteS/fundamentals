import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ChildTarjetaComponent } from './child-tarjeta/child-tarjeta.component'
import { ParentOutputComponent } from './parent-output/parent-output.component';

@NgModule({
  declarations:[
    ChildTarjetaComponent,
    ParentOutputComponent,
  ],
  imports:[
    RouterModule.forChild([
      {path: 'childTarjet', component: ChildTarjetaComponent}
    ]),
  ]
})
export class CommBetweenCompModule{}
