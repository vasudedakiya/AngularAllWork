import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDrugComponent } from './add-drug/add-drug.component';
import { AuthGuard } from './auth.guard';
import { DrugdetailsComponent } from './drugdetails/drugdetails.component';
import { DruglistComponent } from './druglist/druglist.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "druglist", component: DruglistComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },
  { path: "drug/edit/:id", component: AddDrugComponent, canActivate: [AuthGuard] },
  { path: "drug/add", component: AddDrugComponent, canActivate: [AuthGuard] },
  { path: "drug/:id", component: DrugdetailsComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]


})
export class AppRoutingModule { }


