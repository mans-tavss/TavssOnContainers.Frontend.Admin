import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RegStudentService } from './StudentService/reg-student.service';
import { HttpClient } from '@angular/common/http'
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  //variables
  localpath = '../assets/TAVSSv1.png';

  id ;
  APIUrl : string;
  searchString : String;

  alluser;

  title = 'StudentApp'

  constructor(
    private http : HttpClient,
    private routes : Router , 
    public Stservice : RegStudentService , 
    private route : ActivatedRoute,
    private Title : Title  ) 
    {   
      this.id = this.route.snapshot.paramMap.get('id');
    }

  //Functions
  Doctor()
  {
    this.routes.navigate(['/doctor']);
  }

  TA()
  {
    this.routes.navigate(['/TA']);
  }

  Admin()
  {
    this.routes.navigate(['/general']);
  }

  RegStudent()
  {
    this.routes.navigate(['/RegisterStudent']);
  }

  DetailsStudent(id : string)
  {
    this.routes.navigate(['/Controlpanel'  ,{ outlets: { "control": ["StudentDetails", id] } } ]);
  }

  UpdateStuednt(id)
  {
    this.routes.navigate(['/StudentUpdate/', id]);
  }//we remove it and replace it in component by routerlink with student.id

  Course()
  {
    this.routes.navigate(['/Courses']);
  }

  Project()
  {
    this.routes.navigate(['/Project']);
  }
  Community()
  {
    this.routes.navigate(['/Communty']);
  }
  loadStudent () 
  {
    return this.Stservice.getDataList().subscribe(
      studentData => this.alluser = studentData
    )
  }
  
  DeleteStuden(student)
  {
    if ( confirm ( "Are you sure you delete this student?" ) ) 
    {
      this.http.delete('https://localhost:7001/api/v1/DeleteUser' + '/' + student.id)
          .subscribe( res => {
              let index = this.alluser.indexOf(student);
              this.alluser.splice( index , 1 );
              this.loadStudent();
          }
        );
    }
  }

   ngOnInit() {
     this.Title.setTitle(this.title)
     this.APIUrl = localStorage.getItem('IdentityAPI');
     this.loadStudent();
  }

}
