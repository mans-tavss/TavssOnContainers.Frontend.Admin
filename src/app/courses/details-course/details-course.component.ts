import { Component, OnInit } from '@angular/core';
import { CoursesServiceService } from '../Services/courses-service.service';
import { ActivatedRoute } from '@angular/router';
import { DetailsCourse } from '../Classes/details-course';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-details-course',
  templateUrl: './details-course.component.html',
  styleUrls: ['./details-course.component.css']
})
export class DetailsCourseComponent implements OnInit {

  //variables
  title = 'DetailsCourse'
  id : string;
  detailCourse;

  constructor( 
    private service : CoursesServiceService,
    private route : ActivatedRoute,
    private http : HttpClient,
    private Title : Title  ) {

    this.detailCourse = new DetailsCourse(); 
    this.id = this.route.snapshot.params['id'];
    this.service.detailSCourse(this.id)
      .subscribe(
        res => {this.detailCourse = res},
        err => console.log(err)
      );

  }
  
  
  deleteDocFromCourse( detailCourse )
  {
    if( confirm( "Are you sure you delete this Doctor?" ) )
    {
      this.http.delete("https://localhost:6001/api/v1/SuperCourse/DeleteDoctorFromCourse" + '/' + detailCourse.id + '/' + detailCourse.doctors[0].id)
        .subscribe(res => {
          let index = this.detailCourse.indexOf( detailCourse.doctors[0].name );
          this.detailCourse.splice( index , 1 );
        });
       
    }
  }

  ngOnInit() {
    this.Title.setTitle(this.title)
  }

  onSubmit()
  {
    this.service.AssignDocToCourse( this.id , this.detailCourse )
    .subscribe(
      res => console.log( res ),
      err => console.log ( err )
    );
  }

}
