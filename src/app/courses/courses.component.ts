import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesServiceService } from '../courses/Services/courses-service.service';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  //variables
  title = 'CourseApp'
  localpath = '../assets/TAVSSv1.png';
  allCourses ;
  searchString : String;

  constructor( 
    private route: Router,
    private service : CoursesServiceService,
    private http : HttpClient,
    private Title : Title ) { }



  createCourse()
  {
    this.route.navigate(['/createCourse']);
  }

  detailsCourse(id : string)
  {
    this.route.navigate(['/detailsCourse/',id])
  }

  updateCourse( id : string )
  {
    this.route.navigate(['/updateCourse/' , id]);
  }

  loadCourses()
  {
    this.service.getCourses().subscribe(data => this.allCourses = data)
  }

  DeleteCourse( course )
  {
    if( confirm( "Are you sure you delete this Course?" ) )
    {
     this.http.delete( "https://localhost:6001/api/v1/SuperCourse/DeleteCourse" + '/' + course.id )
        .subscribe( res => {
            let index = this.allCourses.indexOf( course );
            this.allCourses.splice( index , 1 );
            this.loadCourses();
        }
      );
    }
  }

  ngOnInit() {
    this.Title.setTitle(this.title);
    this.loadCourses();
  }

}
