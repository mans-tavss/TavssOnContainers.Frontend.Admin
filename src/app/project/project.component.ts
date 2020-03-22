import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProjectServiceService } from './Services/project-service.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(
    private _router : Router , 
    private _http : HttpClient,
    private service : ProjectServiceService,
    private Title : Title
  ) { }

  //varaibles
  searchString : String;
  localpath = '../assets/TAVSSv1.png';
  allProjects;
  title = 'ProjectApp'
  

  //Functions
  Doctors()
  {
    this._router.navigate(['/doctor']);
  }

  Students()
  {
    this._router.navigate(['/student']);
  }

  Course()
  {
    this._router.navigate(['/Courses']);
  }

  TA()
  {
    this._router.navigate(['/TA']);
  }

  detailsProject( id : string )
  {
    this._router.navigate(['/ProjectDetails/' , id]);
  }
  Community()
  {
    this._router.navigate(['/Communty']);
  }


  loadProjects()
  {
    return this.service.getProjects().subscribe(
      data => this.allProjects = data,
    
    );
  }

  updateProject( id : string )
  {
    this._router.navigate(['/updateProject/' , id ]);
  }

  DeleteProject( project )
  {
    if( confirm( "Are you sure you delete this Project?" ) )
    {
     this._http.delete( "https://localhost:7001/api/Project/api/v1/project/RemoveProject" + '/' + project.id )
        .subscribe( res => {
            let index = this.allProjects.indexOf( project );
            this.allProjects.splice( index , 1 );
            this.loadProjects();
        }
      );
    }
  }

  ngOnInit() {
    this.Title.setTitle(this.title);
    this.loadProjects();
  }

}
