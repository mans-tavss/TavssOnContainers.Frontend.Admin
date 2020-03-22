import { Component, OnInit } from '@angular/core';
import { DocServiceService } from '../DoctorService/doc-service.service';
import { Router } from '@angular/router';
import { ClassReg } from '../Classes/class-reg';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-register-doctor',
  templateUrl: './register-doctor.component.html',
  styleUrls: ['./register-doctor.component.css']
})
export class RegisterDoctorComponent implements OnInit {
 
  title = 'RegDoctor'
  allTAs;
  doctor = new ClassReg();
  
  constructor( 
    private _doctor : DocServiceService , 
    private route : Router,
    private Title : Title ) { }

  ngOnInit() {
    this.Title.setTitle(this.title)
  }

  loadTAs()
  {
    return this._doctor.getDataList().subscribe(
      TAuser => this.allTAs = TAuser
    );
  }

  onSubmit()
  {
    this._doctor.RegTDoc( this.doctor )
      .subscribe(
        res => console.log( res ),
        err => console.log( err )
      );
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.doctor);
      this.loadTAs();
      this.route.navigate(['/doctor']);
  }

}
