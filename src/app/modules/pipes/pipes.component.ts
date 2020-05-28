import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.sass']
})
export class PipesComponent implements OnInit {
  name: string;
  paymentDate: string;
  amount: number;
  height: number;
  miles: number;

  constructor() { }

  ngOnInit(): void {
  }

  getName(value: string) {
    this.name = value;
  }

  getDate(value: string) {
    this.paymentDate = value;
  }

  getAmount(value: number) {
    this.amount = value;
  }

  getHeight(value: number) {
    this.height = value;
  }

  getMiles(value: number) {
    this.miles = value;
  }

}
