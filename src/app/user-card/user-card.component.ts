import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  public name: string;
  public username: string;
  public avatar: string;

  constructor() {}

  ngOnInit(): void {
    this.name = 'Isaí';
    this.username = 'Iasi_zdh';
    this.avatar = 'https://avatarfiles.alphacoders.com/223/223772.jpg';
  }
}
