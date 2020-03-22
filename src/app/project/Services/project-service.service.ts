import { Injectable } from '@angular/core';
import { HttpClient , HttpErrorResponse } from "@angular/common/http";
import { Observable , throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {

  constructor( private _http : HttpClient ) { }

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

 //ProjectList
 getProjects()
 {
   return this._http.get( "http://localhost:7001/api/MongoProject/api/v1/project/GetAllProjects" ).pipe(
    retry(3),
    catchError(this.errorHandl)
  );
 }

 //getProjectById
 detailSProject( id : string )
 {
   return this._http.get( "http://localhost:7001/api/MongoProject/api/v1/project/GetProjectById" + '/' + id ).pipe(
     retry(3),
     catchError(this.errorHandl) )
 }

 //updateProject
 updateProject( id : string , newValue : any ) : Observable<object>
 {
   return this._http.put( "https://localhost:7001/api/MongoProject/api/v1/project/UpdateProject" , newValue).pipe(
    retry(3),
    catchError(this.errorHandl) );
 }

}
