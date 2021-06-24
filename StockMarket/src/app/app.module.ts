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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StockListComponent,
    StockDetailComponent,
    StockNewsComponent,
    GenralNewsComponent,
    IpoCalanderComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
