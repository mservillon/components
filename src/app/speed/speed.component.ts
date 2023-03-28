import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speed',
  templateUrl: './speed.component.html',
  styleUrls: ['./speed.component.css']
})
export class SpeedComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {

  }

  distance = 0;
  time = 0;
  total = 0;

  totalSpeed = () => this.total = this.distance / this.time;
}
