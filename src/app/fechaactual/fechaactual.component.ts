import { Component, OnInit } from '@angular/core';
import { template } from '@angular/core/src/render3';

@Component({
  selector: 'app-fechaactual',
  templateUrl: './fechaactual.component.html',
  styleUrls: ['./fechaactual.component.css']
  template: `
  <p> Ricardo, {{  hoy | date:'d/M/y  H:m'}}</p>
  <app-copyright></app-copyright>
  `

})
export class FechaactualComponent implements OnInit {
  hoy:any = new Date();
  constructor() { }

  ngOnInit() {
  }

}
