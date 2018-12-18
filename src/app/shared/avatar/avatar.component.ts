import { Component, Input, OnInit } from '@angular/core';
import { Avatar } from '@shared/avatar/avatar';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  @Input() item: Avatar;

  constructor() { }

  ngOnInit() {

  }

}
