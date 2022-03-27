import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BadmintonComponent } from './badminton/badminton.component';
import { BookComponent } from './book/book.component';
import { CareerComponent } from './career/career.component';
import { ChessComponent } from './chess/chess.component';
import { CricketComponent } from './cricket/cricket.component';
import { CrudComponent } from './crud/crud.component';
import { HockeyComponent } from './Hockey/hockey.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgprimeComponent } from './ngprime/ngprime.component';
import { TableComponent } from './table/table.component';
import { VenueDetailsComponent } from './venue-details/venue-details.component';

const routes: Routes = [
  {
   path:"ngprime",
   component:NgprimeComponent
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'badminton',
    component:BadmintonComponent
  },
  {
    path:'Cricket',
    component:CricketComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'venueDetails',
    component:VenueDetailsComponent
  },
  {
    path:'Hockey',
    component:HockeyComponent
  },
  {
    path:'chess',
    component:ChessComponent
  },
  {
    path:'book',
    component:BookComponent
  },
  {
    path:'crud',
    component:CrudComponent
  },
  {
    path:'career',
    component:CareerComponent
  },
  {
    path:'table',
    component:TableComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
