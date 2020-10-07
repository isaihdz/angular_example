import { Component, OnInit } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-title',
  templateUrl: 'title.component.html',
  styleUrls: ['title.component.scss'],
})
export class TitleComponent implements OnInit {
  public name: string;
  public moreInformation: boolean = false;
  public isAvailable: boolean = true;
  public topics: string[];
  constructor() {}

  ngOnInit() {
    this.name = 'Isaí';
    this.topics = [
      'Fundamentos',
      'Componentes',
      'Directivas',
      'Animaciones',
      'Servicios',
      'RxJS',
      'Binding',
    ];
  }
}
