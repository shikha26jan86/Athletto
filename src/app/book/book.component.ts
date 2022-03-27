import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  myTableData;
  Ccallbadminton;
  todayDate=new Date();
  constructor( private router:Router) { }

  ngOnInit(): void {
    this.myTableData=new FormGroup({
   Name: new  FormControl(''),
   Phone:new FormControl(''),
   Email: new FormControl(''),

    });
    console.log("hhh")
  }
  callValue(value){
    if(value=="badminton")
    {
      this.router.navigate(["/badminton"]);
    }
    if(value=="Cricket")
    {
      this.router.navigate(["/Cricket"]);
    }
    if(value=="Hockey")
    {
      this.router.navigate(['/Hockey']);
    }
    if(value=="chess")
    {
      this.router.navigate(["/chess"]);
    }
    
  }
  shoDataOnConsole()
  {
    console.log(this.myTableData.value);
  }
}
