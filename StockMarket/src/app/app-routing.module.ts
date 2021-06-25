import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenralNewsComponent } from './genral-news/genral-news.component';
import { HomeComponent } from './home/home.component';
import { IpoCalanderComponent } from './ipo-calander/ipo-calander.component';
import { StockDetailComponent } from './stock-detail/stock-detail.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockNewsComponent } from './stock-news/stock-news.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "stocks", component: StockListComponent },
  { path: "stockdetail/:id", component: StockDetailComponent },
  { path: "stocks/ipo", component: IpoCalanderComponent },
  { path: "stock/news", component: GenralNewsComponent },
  { path: "stock/news/:id", component: StockNewsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
