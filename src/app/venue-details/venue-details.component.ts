import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-venue-details',
  templateUrl: './venue-details.component.html',
  styleUrls: ['./venue-details.component.scss']
})
export class VenueDetailsComponent implements OnInit {
  ApiData;

  sub = new Subject();

  constructor(private Http: HttpClient) { }

  ngOnInit(): void {

    this.sub.subscribe(x => {
      console.log(x);
    });
    this.loadApiData();
  }

  loadApiData() {
    this.ApiData = this.getApiData();
    this.Http.get('https://google.com').subscribe(data => {
      console.log(data);
    });



    this.sub.next('OLA UBER');

  }

  getApiData() {
    return {
      name: "ABC ground",
      start_time: "11AM",
      end_time: "7PM",
      address: "Banglore alkjsd alsdkj  laskjd lasdkj",
      images: ["http://laksjdlasd.jpg", "http://lakjsdaslkdj.jpg"],
      slots: [
        {
          day: "12/03/2022",
          slots: [
            {
              time: "1PM - 2PM",
              free: true
            },
            {
              time: "2PM - 3PM",
              free: true
            },
            {
              time: "3PM - 4PM",
              free: true
            },
            {
              time: "4PM - 5PM",
              free: true
            }
          ]
        },
        {
          day: "13/03/2022",
          slots: [
            {
              time: "1PM - 2PM",
              free: true
            },
            {
              time: "2PM - 3PM",
              free: true
            },
            {
              time: "3PM - 4PM",
              free: true
            },
            {
              time: "4PM - 5PM",
              free: true
            }
          ]
        }
      ]
    };
  }
}
