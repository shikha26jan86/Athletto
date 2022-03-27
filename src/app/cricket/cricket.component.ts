import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cricket',
  templateUrl: './cricket.component.html',
  styleUrls: ['./cricket.component.scss']
})
export class CricketComponent implements OnInit {

  col = [
    'name', 'age'
  ];
  data = [
    {
      name: 'Paresh',
      age: 23
    },
    {
      name: 'Sapna',
      age: 22
    }
  ];

  col2 = ['firstname', 'gender'];
  data2 = [{
    firstname: 'Shikha',
    gender: 'Female'
  },
  {
    firstname: 'Harsh',
    gender: 'Male'
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
