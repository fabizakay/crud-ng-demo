import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './logincomponents/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoursesComponent } from './courses/courses.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { DeleteCourseComponent } from './components/delete-course/delete-course.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';

const appRoutes:Routes =[
  {path: '', component:LoginComponent},
  {path: 'login', component:LoginComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'courses', component:CoursesComponent},
  {path: 'courses/add-course',component:AddCourseComponent},
  {path:'courses/delete/:id',component:DeleteCourseComponent},
  {path: 'courses/edit/:id',component:EditCourseComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CoursesComponent,
    MenuComponent,
    AddCourseComponent,
    DeleteCourseComponent,
    EditCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
