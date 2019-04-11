import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { UserService } from './shared/user.service';
import { BreedsService } from './shared/breeds.service';

import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';

import { NavPruebaComponent } from "./app-nav/nav-prueba.component";
import { RouterModule } from '@angular/router';
import { MaterialModule } from './app.material.module';
import { CommBetweenCompModule } from './commBetweenComponents/commBetweenC.module';
import { TemplateSyntaxComponent } from './template-syntax/template-syntax.component';

@NgModule({
  declarations: [
    AppComponent,
    NavPruebaComponent,
    TemplateSyntaxComponent
  ],
  imports: [

    BrowserModule,
    LayoutModule,
    RouterModule.forRoot([
      { path: 'templateSyntax', component: TemplateSyntaxComponent}

    ]),
    CommBetweenCompModule,
    MaterialModule
  ],
  providers: [
    UserService,
    BreedsService
   ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
