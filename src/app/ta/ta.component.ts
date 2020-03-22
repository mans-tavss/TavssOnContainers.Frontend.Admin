import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RegTaService } from './TAServices/reg-ta.service';
import { Title } from '@angular/platform-browser';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-ta',
  templateUrl: './ta.component.html',
  styleUrls: ['./ta.component.css']
})
export class TAComponent implements OnInit {

  //variables
  title = 'TAsAPP'
  allTAs;
  searchString : String;
  localpath = '../assets/TAVSSv1.png';

  constructor( 
    private _router : Router , 
    private _http : HttpClient,
    private serviceTA : RegTaService,
    private Title : Title) {  }

  //Functions
  Doctors()
  {
    this._router.navigate(['/doctor']);
  }

  Students()
  {
    this._router.navigate(['/student']);
  }

  TA()
  {
    this._router.navigate(['/TA']);
  }

  Admin()
  {
    this._router.navigate(['/general']);
  }

  RegTA()
  {
    this._router.navigate(['/RegisterTA']);
  }

  DetailsTA(id : string)
  {
    this._router.navigate(['/TAdetails/' , id]);
  }

  UpdateTA(id : string)
  {
    this._router.navigate(['/UpdateTA/' , id]);
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

  loadTAs()
  {
    return this.serviceTA.getTAs().subscribe(
      TAuser => this.allTAs = TAuser
    );
  }

  //jsonplaceholder.typicode.com/posts
  DeleteTA( TA )
  {
    if( confirm( "Are you sure you delete this TA?" ) )
    {
     this._http.delete( "https://localhost:5001/api/v1/DeleteUser" + '/' + TA.id )
        .subscribe( res => {
            let index = this.allTAs.indexOf( TA );
            this.allTAs.splice( index , 1 );
            this.loadTAs();
        }
      );
    }
  }

  ngOnInit() {
    this.Title.setTitle(this.title)
    this.loadTAs();
  }

}
