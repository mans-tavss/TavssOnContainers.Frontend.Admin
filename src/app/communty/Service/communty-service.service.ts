import { Injectable } from '@angular/core';
import { HttpClient , HttpErrorResponse } from "@angular/common/http";
import { Observable , throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class communtyServiceService {

  constructor( private http : HttpClient ) { }

  // Error handling
  errorHandl(error : HttpErrorResponse) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
    
 }

  
  getCommunities()
  {
    return this.http.get("https://localhost:8001/api/v1/Community/GetCommunities").pipe(
      retry(3),
      catchError(this.errorHandl)
    )
  }
  CreateComm( newComm : object ) : Observable <object>
  {
    return this.http.post("https://localhost:8001/api/v1/Community/CreateCommunity" , newComm).pipe(
      retry(3),
      catchError(this.errorHandl) )
  }
  detailSComm( id : string )
  {
    return this.http.get( "https://localhost:8001/api/v1/Community/GetCommunity" + '/' + id ).pipe(
      retry(3),
      catchError(this.errorHandl) )
  }
      //localStorage.setItem('link', 'https://localhost:8001/api/v1/'); in onIiat
  


 
 }
