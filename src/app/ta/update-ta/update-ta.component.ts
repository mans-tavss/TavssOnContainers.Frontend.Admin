import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegTaService } from '../TAServices/reg-ta.service';
import { UpdateUser } from '../Classes/update-user';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-update-ta',
  // templateUrl: './update-ta.component.html',
  template : '{{title}}',
  styleUrls: ['./update-ta.component.css']
})
export class UpdateTaComponent implements OnInit {

  //variables;
  title = 'UpdateTA'
  id : string;
  TA;
  allTAs;

  constructor(  
  private Activeroute : ActivatedRoute , 
  private serviceTA : RegTaService,
  private router : Router,
  private Tilte : Title ) { }

  loadTAs()
  {
    return this.serviceTA.getTAs().subscribe(
      TAuser => this.allTAs = TAuser
    );
  }

  ngOnInit() {
    this.Tilte.setTitle(this.title)
    this.TA = new UpdateUser();
    this.id = this.Activeroute.snapshot.params["id"];
    this.serviceTA.getTA( this.id )
      .subscribe( 
        data => { this.TA = data },
        err => console.log( err )
       );
  }

  onSubmit()
  {
    
     this.serviceTA.updateTA( this.id , this.TA )
      .subscribe(
        res => console.log( res ),
        err => {
          return console.log(err);
        }
      );
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.TA);
      this.loadTAs();
      this.router.navigate(['/TA']);
  }

}
