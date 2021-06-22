import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { HomeComponent } from './home/home.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "user", component: UserlistComponent },
  { path: "user/add", component: AdduserComponent },
  { path: "user/edit/:id", component: AdduserComponent },
  { path: "user/:id", component: UserdetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
