import { Component, OnInit } from '@angular/core';
import { DetailsStudent } from '../Classes/details-student';
import { RegStudentService } from '../StudentService/reg-student.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-details-st',
  templateUrl: './details-st.component.html',
  styleUrls: ['./details-st.component.css']
})
export class DetailsStComponent implements OnInit {

  //variables
  StData  ;
  title ='DetailsStudent';
  id : string;

  constructor( 
  private Activeroute : ActivatedRoute , 
  private serviceSt : RegStudentService,
  private Title : Title ) {}

  ngOnInit() {  
    this.Title.setTitle(this.title);

    this.StData = new DetailsStudent();
    
    this.id = this.Activeroute.snapshot.params['id'];

    this.serviceSt.getStudent(this.id)
      .subscribe(data => {
        this.StData = data;
      },
      error => console.log(error));
  }

}
