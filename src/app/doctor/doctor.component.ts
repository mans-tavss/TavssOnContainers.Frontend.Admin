import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { DocServiceService } from '../doctor/DoctorService/doc-service.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  //variables
  title = 'DoctorApp'
 
  searchString : String;
  alldoctors;

  //Functions
  TA()
  {
    this._router.navigate(['/TA']);
  }

  Students()
  {
    this._router.navigate(['/student']);
  }

  Admin()
  {
    this._router.navigate(['/general']);
  }

  RegDoctor()
  {
    this._router.navigate(['/RegisterDoctor']);
  }

  DetailsDoctor(id : string)
  {
    this._router.navigate(['/DoctorDetails/' , id]);
  }

  UpdateDoctor(id: string)
  {
    this._router.navigate(['/UpdateDoctor/' , id]);
  }

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
  loadDoctor ()
  {
    return this._rest.getDataList().subscribe(
      doctorData => this.alldoctors = doctorData
    )
  }

  DeleteDoctor( doctor )
  {
    if ( confirm ( "Are you sure you delete this doctor? " ) )
    {
      this._http.delete( "https://localhost:5001/api/v1/DeleteUser" + '/' + doctor.id )
          .subscribe( res => {
            let index = this.alldoctors.indexOf( doctor );
            this.alldoctors.splice( index , 1 );
            this.loadDoctor();
          }

          );
    }
  }

  constructor( 
    private _router: Router , 
    private _http : HttpClient , 
    private _rest : DocServiceService,
    private Title : Title ) {}  

  ngOnInit() {
    this.Title.setTitle(this.title)
    this.loadDoctor();
  }


}
