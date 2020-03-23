import { Component, OnInit } from '@angular/core';
import { faKey , faUser } from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router'
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  Fauser = faUser;
  Fakey = faKey;
  constructor(private route:Router) { }

  ngOnInit() {
  }
  login()
  {
    this.route.navigate(['/Controlpanel']);
  }

}
