import { Component, OnInit } from '@angular/core';
import { DetailsStudent } from '../Classes/details-student';
import { RegStudentService } from '../StudentService/reg-student.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import {ICONSService} from '../../services/icons.service';

@Component({
  selector: 'app-details-st',
  templateUrl: './details-st.component.html',
  styleUrls: ['./details-st.component.css']
})
export class DetailsStComponent implements OnInit {

//variables

  StData;
  Departments = ["Information Systems" , "Information Technolgy" , "Computer Science" , "General" , "Bio Informatics" , "Software Engineering"]
  title ='DetailsStudent';
  id : string;
  APIUrl : String;
  Icons = [];
  constructor(
  private Activeroute : ActivatedRoute ,
  private serviceSt : RegStudentService,
  private Title : Title,
  private ICONS : ICONSService) {}

  ngOnInit() {
    this.Title.setTitle(this.title);

    this.StData = new DetailsStudent();
    this.APIUrl = this.serviceSt.APIUrl;
    this.id = this.Activeroute.snapshot.params['id'];
    this.Icons = this.ICONS.StudentIcons;
    this.serviceSt.getStudent(this.id)
      .subscribe(data => {
        this.StData = data;
      },
      error => console.log(error));
  }

}
