import { Component, OnInit } from '@angular/core';
import { CreateComm } from '../Classes/create-comm';
import { communtyServiceService } from '../Service/communty-service.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-create-comm',
  templateUrl: './create-comm.component.html',
  styleUrls: ['./create-comm.component.css']
})
export class CreateCommComponent implements OnInit {

//varaibles
title = 'CreateCommunity'
newComm = new CreateComm();
communtites;

constructor( 
  private serviceCommunity : communtyServiceService,
  private router : Router,
  private Title : Title ) { }

loadCommunty()
{ 
  this.serviceCommunity.getCommunities()
    .subscribe(
        data => this.communtites = data
    );
}

onSubmit()
{
  this.serviceCommunity.CreateComm( this.newComm )
    .subscribe( 
      res => console.log( res ),
      err => console.log( err )
     );
     alert('Form Submitted succesfully!!!\n Check the values in browser console.');
    console.table(this.newComm);
     this.loadCommunty();
     this.router.navigate(['/Communty']);
}

ngOnInit() {
  this.Title.setTitle(this.title)
}

}