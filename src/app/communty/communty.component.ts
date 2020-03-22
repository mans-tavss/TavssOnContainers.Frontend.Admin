import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { communtyServiceService } from './Service/communty-service.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-communty',
  templateUrl: './communty.component.html',
  styleUrls: ['./communty.component.css']
})
export class CommuntyComponent implements OnInit {


  //variables
  title = 'CommunityApp'
  localpath = '../assets/TAVSSv1.png';
  allcommunty : any;
  searchString : String;


  constructor(
    private route: Router,
    private service :communtyServiceService,
    private http : HttpClient,
    private Tilte : Title) { }
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
  Course()
  {
    this.route.navigate(['/Courses']);
  }
  createComm()
  {
    this.route.navigate(['/Createcomm']);
  }
  detailsComm( id : string )
  {
    this.route.navigate(['/Detailscomm/' , id ]);
  }

  loadCommunity()
  {
    this.service.getCommunities()
      .subscribe( data => { this.allcommunty = data;
      console.log(data);
      });
  }

  DeleteCommunty( communty )
  {
    if( confirm( "Are you sure you delete this Communty?" ) )
    {
     this.http.delete( "https://localhost:8001/api/v1/Community/DeleteCommunity" + '/' + communty.id )
        .subscribe( res => {
            let index = this.allcommunty.indexOf( communty );
            this.allcommunty.splice( index , 1 );
            this.loadCommunity();
        }
      );
    }
  }

  ngOnInit() {
    this.Tilte.setTitle(this.title);
    this.loadCommunity();
  }


}
