import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-badminton',
  templateUrl: './badminton.component.html',
  styleUrls: ['./badminton.component.scss']
})
export class BadmintonComponent implements OnInit {
  myFormGroup;
  shikha;

constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myFormGroup = new FormGroup({
      firstVal: new FormControl(''),
      secondVal: new FormControl('dddddddd', Validators.email),
    });
    console.log("hi");

    this.shikha = new FormGroup({
      Email: new FormControl('',[Validators.required]),
      Password : new FormControl('111',[Validators.required,Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)]),
      Phone  : new FormControl(''),
    });

    console.log(this.shikha); 
    // this.shikha = this.fb.group({
    //   Email: this.fb.control(''),
    //   Password: this.fb.control(''),
    //   Phone: this.fb.control('')
    // })
   
   
    // this.myFormGroup = this.fb.group({});
     this.myFormGroup.patchValue({ firstVal: '1', secondVal:'2'});
     this.shikha.patchValue({Email:'111', Password:'2222', Phone:'22222'});
    // this.myFormGroup.setValue({ firstVal: '11', secondVal: '22' });
}

showValues() {
    console.log(this.myFormGroup.value);
    console.log(this.shikha.value);
   }
   
  }  