import { Component, OnInit } from '@angular/core';
import { Avatar } from '@shared/avatar/avatar';

@Component({
  selector: 'app-demo-page',
  templateUrl: './demo-page.component.html',
  styleUrls: ['./demo-page.component.scss']
})
export class DemoPageComponent implements OnInit {

  item01: Avatar;
  item02: Avatar;

  constructor() { }

  ngOnInit() {
    this.item01 = { name: 'Angular', photoUrl: 'assets/img/iconfinder_angular.png' };
    this.item02 = { name: 'Rails' };
  }

}
