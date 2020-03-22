import { Component, OnInit } from '@angular/core';
import { CoursesServiceService } from '../Services/courses-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateCourse } from '../Classes/update-course';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {

  //varaiables
  title = 'UpdateCourse'
  id : string;
  Course;
  allCourses;

  
  constructor( 
    private service : CoursesServiceService,
    private actRoute : ActivatedRoute,
    private route : Router,
    private Title : Title ) { 
      this.Course = new UpdateCourse();
      this.id = this.actRoute.snapshot.params["id"];
      this.service.detailSCourse( this.id )
        .subscribe(
          data => this.Course = data,
          err => console.log( err )
        );
    }

    loadTAs()
  {
    return this.service.getCourses().subscribe(
      TAuser => this.allCourses = TAuser
    );
  }

  onSubmit()
  {
    this.service.updateCourse(this.id , this.Course )
      .subscribe(
        res => console.log( res ),
        err => console.log ( err )
      );
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.Course);
      this.loadTAs();
      this.route.navigate(['/Courses']);
  }

  ngOnInit() {
    this.Title.setTitle(this.title)
  }

}
