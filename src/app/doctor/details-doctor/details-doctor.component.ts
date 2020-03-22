import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocServiceService } from '../DoctorService/doc-service.service';
import { TADetails } from '../../ta/Classes/tadetails';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-details-doctor',
  templateUrl: './details-doctor.component.html',
  styleUrls: ['./details-doctor.component.css']
})
export class DetailsDoctorComponent implements OnInit {

  //variables
  doctor;
  title = 'DetailsDoctor'
  id : string;

  constructor(  
    private ActRoute :  ActivatedRoute , 
    private doctorService : DocServiceService,
    private Title : Title  ) { }

  

  ngOnInit() {
    this.Title.setTitle(this.title);
    this.doctor = new TADetails();
    this.id = this.ActRoute.snapshot.params['id'];

    this.doctorService.getDocById(this.id)
      .subscribe(data => {
        console.log(data)
        this.doctor = data;
      }, error => console.log(error));
  }

}
