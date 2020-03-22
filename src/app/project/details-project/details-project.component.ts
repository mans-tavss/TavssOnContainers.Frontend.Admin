import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsProject } from '../Classes/details-project';
import { ProjectServiceService } from '../Services/project-service.service';
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-details-project',
  templateUrl: './details-project.component.html',
  styleUrls: ['./details-project.component.css']
})
export class DetailsProjectComponent implements OnInit {

  //variables
  ProjectData  ; 
  id : string;
  title = 'DetailsProject';

  constructor(
    private Activeroute : ActivatedRoute ,
    private service : ProjectServiceService,
    private Title : Title
  ) { }

  ngOnInit() {

    this.Title.setTitle(this.title);

    this.ProjectData = new DetailsProject();
    
    this.id = this.Activeroute.snapshot.params['id'];

    this.service.detailSProject(this.id)
      .subscribe(data => {
        this.ProjectData = data;
      },
      error => console.log(error));
  }

}
