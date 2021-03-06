import { Injectable } from '@angular/core';
import { Course } from '../interfaces/Courses';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  

  constructor(private http :HttpClient) { 

   
  }

  getCourses(){
    return this.http.get('http://localhost:3000/courses');
  }
}
