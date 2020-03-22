import { Component, OnInit } from '@angular/core';
import { CreateCourse } from '../Classes/create-course';
import { CoursesServiceService } from '../Services/courses-service.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {

  //varaibles
  title = 'CreateCourse'
  newCourse = new CreateCourse();
  allCourses;

  constructor( 
    private serviceCourse : CoursesServiceService,
    private router : Router,
    private Title : Title ) { }

  loadCourses()
  { 
    this.serviceCourse.getCourses()
      .subscribe(
          data => this.allCourses = data
      );
  }

  onSubmit(course)
  {
    this.serviceCourse.createCourse( course )
      .subscribe( 
        res => console.log( res ),
        err => console.log( err )
       );
       alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.newCourse);
       this.loadCourses();
       this.router.navigate(['/Courses']);
  }

  ngOnInit() {
    this.Title.setTitle(this.title)
  }

}
