import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pints',
  templateUrl: './pints.component.html',
  styleUrls: ['./pints.component.css']
})
export class PintsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pintsReading = 'err';
}
