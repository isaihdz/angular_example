import { Component } from '@angular/core';

@Component({
  selector: 'title',
  templateUrl: 'title.component.html',
})
export class TitleComponent {
  public name: string = 'Isaí ';
  public edad: number = 27;
  public edades: number[];

  getEdadNombre(): string {
    /**interpolation with string type js */
    return `${this.name} : ${this.edad}`;
  }
}
