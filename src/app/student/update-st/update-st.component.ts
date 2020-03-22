import { Component, OnInit } from '@angular/core';
import { RegStudentService } from '../StudentService/reg-student.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UpdateUser } from '../../ta/Classes/update-user';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-update-st',
  templateUrl: './update-st.component.html',
  styleUrls: ['./update-st.component.css']
})
export class UpdateStComponent implements OnInit {

  //variables;
  id : string;
  student;
  allStudents;
  title = 'UpdateStudent'

  constructor( 
  private _http : HttpClient , 
  private Activeroute : ActivatedRoute , 
  private serviceSt : RegStudentService,
  private router : Router,
  private Title : Title ) { }

  loadTAs()
  {
    return this.serviceSt.getDataList().subscribe(
      TAuser => this.allStudents = TAuser
    );
  }

  ngOnInit() {
    this.Title.setTitle(this.title);
    this.student = new UpdateUser();
    this.id = this.Activeroute.snapshot.params["id"];
    this.serviceSt.getStudent( this.id )
      .subscribe( 
        data => { this.student = data },
        err => console.log( err )
       );
  }

  onSubmit()
  {
    
     this.serviceSt.updateSt( this.id , this.student )
      .subscribe(
        res => console.log( res ),
        err => {
          return console.log(err);
        }
      );
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.student);
      this.loadTAs();
      this.router.navigate(['/student']);
  }

}
