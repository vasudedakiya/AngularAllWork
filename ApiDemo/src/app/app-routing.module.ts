import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddFacultyComponent } from './add-faculty/add-faculty.component';
import { DetailFacultyComponent } from './detail-faculty/detail-faculty.component';
import { FacultyComponent } from './faculty/faculty.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "allfaculty", component: FacultyComponent },
  { path: "faculty/add", component: AddFacultyComponent },
  { path: "faculty/edit/:id", component: AddFacultyComponent },
  { path: "faculty/:id", component: DetailFacultyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
