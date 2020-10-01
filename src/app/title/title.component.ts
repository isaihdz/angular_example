import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'title',
  templateUrl: 'title.component.html',
})
export class TitleComponent implements OnInit {
  public name: string;
  public edad: number;
  public edades: number[];

  /*constructor() {
    this.name = 'Isaí';
    this.edad = 27;}*/
  constructor() {}

  ngOnInit() {
    this.name = 'Isaí';
    this.edad = 27;
  }

  getEdadNombre(): string {
    /**interpolation with string type js */
    return `${this.name} : ${this.edad}`;
  }
}
