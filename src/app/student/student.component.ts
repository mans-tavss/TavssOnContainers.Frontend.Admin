import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegStudentService } from './StudentService/reg-student.service';
import { ActivatedRoute } from '@angular/router';
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

  searchString : String;
  
  alluser;

  title = 'StudentApp'

  constructor(
    private http : HttpClient,
    private _router : Router , 
    public Stservice : RegStudentService , 
    private route : ActivatedRoute,
    private Title : Title  ) 
    {   
      this.id = this.route.snapshot.paramMap.get('id');
    }

  //Functions
  Doctor()
  {
    this._router.navigate(['/doctor']);
  }

  TA()
  {
    this._router.navigate(['/TA']);
  }

  Admin()
  {
    this._router.navigate(['/general']);
  }

  RegStudent()
  {
    this._router.navigate(['/RegisterStudent']);
  }

  DetailsStudent(id : string)
  {
    this._router.navigate(['/StudentDetails/' , id]);
  }

  UpdateStuednt(id)
  {
    this._router.navigate(['/StudentUpdate/', id]);
  }//we remove it and replace it in component by routerlink with student.id

  Course()
  {
    this._router.navigate(['/Courses']);
  }

  Project()
  {
    this._router.navigate(['/Project']);
  }
  Community()
  {
    this._router.navigate(['/Communty']);
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
     this.loadStudent();
  }

}
