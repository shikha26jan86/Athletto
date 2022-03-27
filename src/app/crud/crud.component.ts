import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  tableFormGroup;

  tableData = [{
    name: 'sss',
    age: '22',
    Email: 'sss@gmail.com',
    mobile: '6655677789'
  },
  {
    name: 'aaa',
    age: '23332',
    Email: 'aaa@gmail.com',
    mobile: '345354545'
  },
  {
    name: 'tttt',
    age: '43434',
    Email: 'ttt@gmail.com',
    mobile: '343243243'
  }
  ]

  constructor() { }

  ngOnInit(): void {
    this.tableFormGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required])
    });


  }
  showData() {
    console.log(this.tableFormGroup.value);
    this.tableData.push({
      name: this.tableFormGroup.value.name,
      age: this.tableFormGroup.value.age,
      Email: this.tableFormGroup.value.email,
      mobile: this.tableFormGroup.value.mobile
    });
  }
  delete(indx) {
    this.tableData.splice(indx, 1);
  }
}
