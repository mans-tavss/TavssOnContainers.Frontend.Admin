import { Injectable } from '@angular/core';
import { HttpClient , HttpErrorResponse } from "@angular/common/http";
import { Observable , throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DocServiceService {

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

 //create Doctor
 RegTDoc( newDoc : Object ):Observable<Object>
 {
   return this._http.post( "https://localhost:5001/api/v1/RegisterDoctor" , newDoc ).pipe(
    retry(3),
    catchError(this.errorHandl)
  )
 }
 
 //GET List Doctor
 getDataList() 
 {
   return this._http.get("https://localhost:5001/api/v1/GetDoctors")
   .pipe(
     retry(3),
     catchError(this.errorHandl)
   )
 }

 //Doctor Deatails
 getDocById( id : string )
 {
   return this._http.get("https://localhost:5001/api/v1/GetDoctor" + '/' + id);
 }
 
 //updateTA
 updateTA( id : string , value : any ) : Observable<object>
 {
   return this._http.put( "https://localhost:5001/api/v1/UpdateUser" , value);
 }

}
