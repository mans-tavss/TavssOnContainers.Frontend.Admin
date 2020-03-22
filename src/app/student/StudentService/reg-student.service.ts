import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders , HttpErrorResponse} from "@angular/common/http";
import { Observable , throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegStudentService {


  constructor( private _http : HttpClient ) { }

  // Http Headers
  Headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

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

 //create Student
 RegSt( newSt : Object ):Observable<Object>
 {
   return this._http.post( "https://localhost:5001/api/v1/RegisterStudent" , newSt )
 }

  //Get (Details) for one user
  getStudent(id : string) 
  {
    return this._http.get("https://localhost:5001/api/v1/GetStudent" + '/' + id);
  }

  //GET List Student
  getDataList() 
  {
    return this._http.get("https://localhost:5001/api/v1/GetStudents")
    .pipe(
      retry(3),
      catchError(this.errorHandl)
    )
  }

  //updateTA
  updateSt( id : string , value : any ) : Observable<object>
  {
    return this._http.put( "https://localhost:5001/api/v1/UpdateUser" , value)
    .pipe(
      retry(3),
      catchError(this.errorHandl)
    )
  }

}
