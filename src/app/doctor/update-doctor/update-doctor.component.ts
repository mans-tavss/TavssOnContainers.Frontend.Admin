import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { DocServiceService } from '../DoctorService/doc-service.service';
import { UpdateUser } from '../../ta/Classes/update-user';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-update-doctor',
  templateUrl: './update-doctor.component.html',
  styleUrls: ['./update-doctor.component.css']
})
export class UpdateDoctorComponent implements OnInit {

  //variables;
  title = 'UpdateDoctor'
  id : string;
  dctor;
  allDoc;

  constructor( 
  private _http : HttpClient , 
  private Activeroute : ActivatedRoute , 
  private serviceDoc : DocServiceService,
  private router : Router,
  private Title : Title ) { }

  loadTAs()
  {
    return this.serviceDoc.getDataList().subscribe(
      TAuser => this.allDoc = TAuser
    );
  }

  ngOnInit() {
    this.Title.setTitle(this.title)
    this.dctor = new UpdateUser();
    this.id = this.Activeroute.snapshot.params["id"];
    this.serviceDoc.getDocById( this.id )
      .subscribe( 
        data => { this.dctor = data },
        err => console.log( err )
       );
  }

  onSubmit()
  {
    
     this.serviceDoc.updateTA( this.id , this.dctor )
      .subscribe(
        res => console.log( res ),
        err => {
          return console.log(err);
        }
      );
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.dctor);
      this.loadTAs();
      this.router.navigate(['/doctor']);
  }
}
