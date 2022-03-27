import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { BadmintonComponent } from './badminton/badminton.component';
import { CricketComponent } from './cricket/cricket.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HockeyComponent } from './Hockey/hockey.component';
import { ChessComponent } from './chess/chess.component';
import { BookComponent } from './book/book.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { VenueDetailsComponent } from './venue-details/venue-details.component';
import { CrudComponent } from './crud/crud.component';
import { CareerComponent } from './career/career.component';
import { TableComponent } from './table/table.component';

import { NgprimeComponent } from './ngprime/ngprime.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    BadmintonComponent,
    CricketComponent,
    HockeyComponent,
    ChessComponent,
    BookComponent,
    LoginComponent,
    VenueDetailsComponent,
    CrudComponent,
    CareerComponent,
    TableComponent,
    
    NgprimeComponent,
    
  

    
    ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
