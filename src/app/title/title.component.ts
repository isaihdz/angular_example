import { Component, OnInit } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-title',
  templateUrl: 'title.component.html',
  styleUrls: ['title.component.scss'],
})
export class TitleComponent implements OnInit {
  public name: string;
  public edad: number;
  public edades: number[];

  public css_classes: string[] = ['active', 'shadow'];

  public isAvailable: boolean = true;

  /*constructor() {
    this.name = 'Isaí';
    this.edad = 27;}*/
  constructor() {}

  ngOnInit() {
    this.name = 'Isaí';
    this.edad = 27;

    setTimeout(() => (this.name = 'Iasí'), 3000);
    setTimeout(() => (this.isAvailable = false), 3000);
    setTimeout(() => (this.css_classes = ['shadow']), 3000);
  }

  getEdadNombre(): string {
    /**interpolation with string type js */
    return `${this.name} : ${this.edad}`;
  }
}
