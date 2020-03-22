import { Component, OnInit } from '@angular/core';
import { TADetails } from '../Classes/tadetails';
import { ActivatedRoute, Router } from '@angular/router';
import { RegTaService } from '../TAServices/reg-ta.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-details-ta',
  templateUrl: './details-ta.component.html',
  styleUrls: ['./details-ta.component.css']
})


export class DetailsTaComponent implements OnInit {

  //variables
  TAData  ;
  
  id : string;
  title = 'DetailsTA'
  TA()
  {
    this._router.navigate(['/TA']);
  }
  constructor( 
    private _router : Router ,
  private Activeroute : ActivatedRoute , 
  private serviceTA : RegTaService,
  private Title : Title ) {}
  
  ngOnInit() {
    this.Title.setTitle(this.title)
    this.TAData = new TADetails();
    
    this.id = this.Activeroute.snapshot.params['id'];

    this.serviceTA.getTA(this.id)
      .subscribe(data => {
        this.TAData = data;
      },
      error => console.log(error));
  }

}
