import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import {Login} from "../interfaces/login"
import {Urls} from "../Classes/urls"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {


  constructor(private _http : HttpClient ) { }

  adminlogin = (user : object) : Observable<object>=>{
    console.log(user)
    return  this._http.post<any>("https://localhost:5001/api/v1/AdminLogin" ,user );
  }
}
