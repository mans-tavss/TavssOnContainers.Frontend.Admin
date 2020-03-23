import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  localpath = '../assets/TAVSSv1.png';
  constructor(private routes: Router, private route :ActivatedRoute) { 

    
  }

  ngOnInit() {
  }


    //Functions
    Doctor()
    {
      this.routes.navigate([ { outlets: { "control": ["doctor"] } } ], { relativeTo: this.route });
    }
  
    TA()
    {
      this.routes.navigate([ { outlets: { "control": ["TA"] } } ], { relativeTo: this.route });
    }
  
    Student()
    {
      this.routes.navigate([ { outlets: { "control": ["student"] } } ], { relativeTo: this.route });

    }
  
    Project()
    {
      this.routes.navigate([ { outlets: { "control": ["Project"] } } ], { relativeTo: this.route });
    }
    Community()
    {
      this.routes.navigate([ { outlets: { "control": ["Communty"] } } ], { relativeTo: this.route });
    }

    Course()
    {
      this.routes.navigate([ { outlets: { "control": ["Course"] } } ], { relativeTo: this.route });
    }

}
