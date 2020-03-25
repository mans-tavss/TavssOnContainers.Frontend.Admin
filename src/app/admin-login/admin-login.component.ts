import { Component, OnInit } from '@angular/core';
import { faKey , faUser } from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {Login} from '../interfaces/login'
import {LoginServiceService} from "../services/login-service.service"
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  
  Fauser = faUser;
  Fakey = faKey;
  loggedin = false;
  userLogin;
  constructor(private route:Router, private loginservice : LoginServiceService ) {


   }
  email = new FormControl('');
  password = new FormControl('');
  ngOnInit() {
  }
  login()
  {

    this.loginservice.adminlogin({'email' : this.email.value , 'password': this.password.value})
    .subscribe(x=>console.log(x));
  }

}
