import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  localpath = '../assets/TAVSSv1.png';
  constructor(private route: Router) { 

    
  }

  ngOnInit() {
  }


    //Functions
    Doctor()
    {
      this.route.navigate(['/doctor']);
    }
  
    TA()
    {
      this.route.navigate(['/TA']);
    }
  
    Student()
    {
      this.route.navigate(['/student']);
    }
  
    Project()
    {
      this.route.navigate(['/Project']);
    }
    Community()
    {
      this.route.navigate(['/Communty']);
    }

    Course()
    {
      this.route.navigate(['/Communty']);
    }

}
