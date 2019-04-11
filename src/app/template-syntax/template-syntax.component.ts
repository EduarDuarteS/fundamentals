import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-syntax',
  templateUrl: './template-syntax.component.html',
  styles: [`

      .containerTwo{
        width:100%;
        padding-right:15px;
        padding-left:15px;
        margin-right:auto;
        margin-left:auto
      }
    `]
})
export class TemplateSyntaxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
