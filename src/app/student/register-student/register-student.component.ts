import { Component, OnInit } from '@angular/core';
import { RegStudentService } from '../StudentService/reg-student.service';
import { Router } from '@angular/router';
import { ClassReg } from '../Classes/class-reg';
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent implements OnInit {

  title = 'RegStudent'
  allStudents;
  student = new ClassReg();
  
  constructor( 
    private _student : RegStudentService , 
    private route : Router,
    private titleServices : Title ) { }

  ngOnInit() {
    this.titleServices.setTitle(this.title);
  }

  loadTAs()
  {
    return this._student.getDataList().subscribe(
      TAuser => this.allStudents = TAuser
    );
  }

  onSubmit()
  {
    this._student.RegSt( this.student )
      .subscribe(
        res => console.log( res ),
        err => console.log( err )
      );
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.student);
      this.loadTAs();
      this.route.navigate(['/student']);
  }

}
