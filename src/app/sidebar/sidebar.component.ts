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
    this.InitAPIUrls();
  }

    monitor()
    {
      this.routes.navigate([ { outlets: { "control": ["monitor"] } } ], { relativeTo: this.route });

    }
    ranks()
    {
      
      this.routes.navigate([ { outlets: { "control": ["ranks"] } } ], { relativeTo: this.route });

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

    InitAPIUrls =()=>{
      localStorage.setItem("IdentityAPI" ,  "https://localhost:5001/");
      localStorage.setItem("CourseAPI" ,  "https://localhost:5000/");
      localStorage.setItem("ProjectAPI" ,  "https://localhost:5000/");
      localStorage.setItem("AcclaimAPI" ,  "https://localhost:5000/");
      localStorage.setItem("RealTimeAPI" ,  "https://localhost:5000/");

    }

}
