import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BadmintonComponent } from '../badminton/badminton.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input () myvalue;
  selectedValue = '';
  BbookCall;
  constructor(private router: Router) { }

  ngOnInit(): void {
    // this.router.navigate(['/badminton']);
  }
  logIn()
  {
    if(this.logIn)
    {
      this.router.navigate(['/login']);
    }
  }

  bookCall() {
    this.router.navigate(["/book"]);
  }

  Venue()
  {
    if(this.Venue)
    {
      this.router.navigate(['/venueDetails']);
    }
  }
  onChange() {
    if (this.selectedValue == "badminton")
     {
      this.router.navigate(['/badminton']);
    }
    if (this.selectedValue == "Cricket") 
    {
      this.router.navigate(['/Cricket']);
    }
    if (this.selectedValue == "Hockey")
     {
      this.router.navigate(['/Hockey']);
    }
    if (this.selectedValue == "chess")
     {
      this.router.navigate(['/chess']);
    }

    
    console.log(this.selectedValue);
  }
}
