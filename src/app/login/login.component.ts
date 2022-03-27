import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFormGroup;
  constructor(){ }

  ngOnInit(): void {
    this.loginFormGroup=new FormGroup({
    Email: new FormControl(''),
    Password: new FormControl(''),
    Gender:new FormControl(''),
    PhoneNo:new FormControl(''),
    Qualification: new FormControl(''),
    Age:new FormControl(''),
    });
  }

  Submit()
  {
    console.log(this.loginFormGroup.value);
  }
}
