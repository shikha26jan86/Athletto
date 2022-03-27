import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  resultArr = [];
  TableData = [{
    name: 'sss',
    age: 33,
    state: 'maharashtra',
    salary: 20000
  },
  {
    name: 'ppp',
    age: 20,
    state: 'uttar pradesh',
    salary: 10000
  },
  {
    name: 'www',
    age: 18,
    state: 'bihar',
    salary: 33000
  },
  {
    name: 'qqq',
    age: 5,
    state: 'madhya pradesh',
    salary: 15000,
  },
  {
    name: 'sony',
    age: 6,
    state: 'maharashtra',
    salary: 55000,
  },
  {
    name: 'paresh',
    age: 32,
    state: 'maharashtrah',
    salary: 150000
  },
  {
    name: 'praveen',
    age: 33,
    state: 'bihar',
    salary: 1750000,
  },
  {
    name: 'sapna',
    age: 33,
    state: 'uttar pradesh',
    salary: 99000
  },
  {
    name: 'ruchi',
    age: 30,
    state: 'maharashtra',
    salary: 200000
  },
  ]
  constructor() { }

  ngOnInit(): void {

     this.TableData.forEach(item=>{
     if(item.state=="maharashtra"){
     this.resultArr.push(item);
      }
    });


    // this.resultArr = this.TableData.filter(item => item.age <= 18);
    this.resultArr = this.TableData.sort((a,b) => a.salary - b.salary);
    // this.resultArr[this.resultArr.length - 3];
    // console.log(this.TableData.find(item=>item.age === 18));
  }
}
