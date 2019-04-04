import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';


import { PruebasComponent } from './pruebas/pruebas.component';
import { NavPruebaComponent } from "./nav-prueba/nav-prueba.component";
import { RouterModule } from '@angular/router';
import { MaterialModule } from './app.material.module';
import { CommBetweenCompModule } from './commBetweenComponents/commBetweenC.module';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    NavPruebaComponent,
    PruebasComponent
  ],
  imports: [

    BrowserModule,
    LayoutModule,
    RouterModule.forRoot([
      { path: 'prueba', component: PruebasComponent},

    ]),
    CommBetweenCompModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
