import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator} from '@angular/forms';

@Component({
  selector: 'app-hockey',
  templateUrl: './hockey.component.html',
  styleUrls: ['./hockey.component.scss']
})

export class HockeyComponent implements OnInit {
  MyFormGroup;
  constructor() {
    
  }

  ngOnInit(): void {
    this.MyFormGroup=new FormGroup({
      Name: new FormControl(''),
      Age: new FormControl(''),
      Gender: new FormControl(''),  
      Qualification: new FormControl(''),
    })
  }
  ShoewDataOnConsole()
  {
    console.log(this.MyFormGroup.value);
  }
}