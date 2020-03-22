import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-general-app',
  templateUrl: './general-app.component.html',
  styleUrls: ['./general-app.component.css']
})
export class GeneralAppComponent implements OnInit {

  localpath = '../assets/TAVSSv1.png';

  Doctor()
  {
    this._router.navigate(['/doctor']);
  }

  TA()
  {
    this._router.navigate(['/TA']);
  }

  Students()
  {
    this._router.navigate(['/student']);
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
  constructor( private _router : Router ) { }

  ngOnInit() {
  }

}
