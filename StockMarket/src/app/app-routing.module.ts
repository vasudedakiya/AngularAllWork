import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StockDetailComponent } from './stock-detail/stock-detail.component';
import { StockListComponent } from './stock-list/stock-list.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "stocks", component: StockListComponent },
  { path: "stockdetail", component: StockDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
