import { Component, OnInit } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'title',
  templateUrl: 'title.component.html',
  styleUrls: ['title.component.scss'],
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
