import { Component, OnInit } from '@angular/core';
import { RegTaService } from '../TAServices/reg-ta.service';
import { TAReg } from '../Classes/tareg';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-register-ta',
  templateUrl: './register-ta.component.html',
  styleUrls: ['./register-ta.component.css']
})
export class RegisterTaComponent implements OnInit {

  title = 'RegTA'
  allTAs;
  TA = new TAReg();
  
  constructor( 
    private _TA : RegTaService , 
    private route : Router,
    private Title : Title ) { }

  ngOnInit() {
    this.Title.setTitle(this.title)
  }

  loadTAs()
  {
    return this._TA.getTAs().subscribe(
      TAuser => this.allTAs = TAuser
    );
  }

  onSubmit()
  {
    this._TA.RegTA( this.TA )
      .subscribe(
        res => console.log( res ),
        err => console.log( err )
      );
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.TA);
      this.loadTAs();
      this.route.navigate(['/TA']);
  }

}
