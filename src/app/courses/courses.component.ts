import { Component, OnInit } from '@angular/core';
import { Course } from '../interfaces/Courses';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses:Course[]=[];

  constructor(private _courseService:CoursesService) { 
    _courseService
    .getCourses()
    .subscribe((courses:any)=>{
      this.courses = courses;
    });
    console.log(this.courses);
  }

  ngOnInit(): void {
  }

}
