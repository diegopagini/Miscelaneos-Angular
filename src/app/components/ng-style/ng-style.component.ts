import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="tamano">Hola mundo... esta es una etiqueta</p>

    <button class="btn btn-primary" (click)="tamano = tamano + 5">
      <span class="material-icons valign-wrapper"> add_circle </span>
    </button>
    <button class="btn btn-primary" (click)="tamano = tamano - 5">
      <span class="material-icons valign-wrapper"> remove_circle </span>
    </button>
  `,
  styles: [],
})
export class NgStyleComponent implements OnInit {
  tamano: number = 20;
  constructor() {}

  ngOnInit(): void {}
}
