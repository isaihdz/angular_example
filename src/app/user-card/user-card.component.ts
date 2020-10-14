import { Component, OnInit , EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  public name: string;
  public username: string;
  public avatar: string;

  @Output() subscribed = new EventEmitter<boolean> ();

  constructor() {}

  ngOnInit(): void {
    this.name = 'Isaí';
    this.username = 'Iasi_zdh';
    this.avatar = 'https://avatarfiles.alphacoders.com/223/223772.jpg';

    setTimeout(() => this.subscribed.emit(true), 3000);
  }

  changing(event: any): void{
    this.username = event.target.value;
  }
}
