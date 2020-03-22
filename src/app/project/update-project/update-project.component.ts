import { Component, OnInit } from '@angular/core';
import { ProjectServiceService } from '../Services/project-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateProject } from '../Classes/update-project';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {

  constructor(
    private service : ProjectServiceService,
    private Activeroute : ActivatedRoute ,
    private router : Router,
    private Title : Title
  ) { }

  //variables;
  id : string;
  project;
  allProjects;
  title ='UpdateProject'

  ngOnInit() {
    this.Title.setTitle(this.title)

    this.project = new UpdateProject();
    this.id = this.Activeroute.snapshot.params["id"];
    this.service.detailSProject( this.id )
      .subscribe( 
        data => { this.project = data },
        err => console.log( err )
       );
  }

  loadProjectss()
  {
    return this.service.getProjects().subscribe(
      data => this.allProjects = data
    );
  }

  onSubmit()
  {
    
     this.service.updateProject( this.id , this.project )
      .subscribe(
        res => console.log( res ),
        err => {
          return console.log(err);
        }
      );
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.project);
      this.loadProjectss();
      this.router.navigate(['/Project']);
  }

}
