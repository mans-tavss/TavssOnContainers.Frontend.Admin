import { Component, OnInit } from '@angular/core';
import { communtyServiceService } from '../Service/communty-service.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DetailsComm } from "../Classes/DetailsComm";
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-details-comm',
  templateUrl: './details-comm.component.html',
  styleUrls: ['./details-comm.component.css']
})
export class DetailsCommComponent implements OnInit {
 //variables
 title = 'DetailsCommunity'
 id : string;
 detailComm;

 constructor( 
   private service : communtyServiceService,
   private route : ActivatedRoute,
   private http : HttpClient,
   private Title : Title  ) {

   this.detailComm = new DetailsComm(); 
   this.id = this.route.snapshot.params['id'];
   this.service.detailSComm(this.id)
     .subscribe(
       res => {this.detailComm = res},
       err => console.log(err)
     );

 }
 
 deleteDeve( detailComm )
  {
    if( confirm( "Are you sure you delete this Doctor?" ) )
    {
      this.http.delete("https://localhost:6001/api/v1/SuperCourse/DeleteDoctorFromCourse" + '/' + detailComm.id + '/' + detailComm.developers[0].id)
        .subscribe(res => {
          let index = this.detailComm.indexOf( detailComm.doctors[0].name );
          this.detailComm.splice( index , 1 );
        });
       
    }
  }

 ngOnInit() {
   this.Title.setTitle(this.title);
 }

 onSubmit()
 {
   
 }

}
