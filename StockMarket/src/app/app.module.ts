import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockDetailComponent } from './stock-detail/stock-detail.component';
import { StockNewsComponent } from './stock-news/stock-news.component';
import { GenralNewsComponent } from './genral-news/genral-news.component';
import { IpoCalanderComponent } from './ipo-calander/ipo-calander.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsedResorceComponent } from './used-resorce/used-resorce.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StockListComponent,
    StockDetailComponent,
    StockNewsComponent,
    GenralNewsComponent,
    IpoCalanderComponent,
    HeaderComponent,
    UsedResorceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
