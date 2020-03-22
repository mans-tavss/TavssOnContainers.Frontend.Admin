import { Injectable } from '@angular/core';
import { HttpClient , HttpErrorResponse } from "@angular/common/http";
import { Observable , throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CoursesServiceService {

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

  //getCourses
  getCourses()
  {
    return this.http.get("https://localhost:6001/api/v1/SuperCourse/GetCourses").pipe(
      retry(3),
      catchError(this.errorHandl)
    )
  }
  //localhost:6001/api/v1/SuperCourse/GetCourses

  //create new course
  createCourse( newCourse : object ) : Observable <object>
  {
    return this.http.post("https://localhost:6001/api/v1/SuperCourse/CreateCourse" , newCourse).pipe(
      retry(3),
      catchError(this.errorHandl) )
  }

  //getCourseById
  detailSCourse( id : string )
  {
    return this.http.get( "https://localhost:6001/api/v1/SuperCourse/GetCourseById" + '/' + id ).pipe(
      retry(3),
      catchError(this.errorHandl) )
  }

  //updateCourse
  updateCourse( id : string , newValues : any ) : Observable<Object>
  {
    return this.http.put( "https://localhost:6001/api/v1/SuperCourse/UpdateCourse" , newValues )
    .pipe(
      retry(3),
      catchError(this.errorHandl) )
  }

  //AssignDocToCourse
  AssignDocToCourse( CID : string , newDoc : any )
  {
    return this.http.put("https://localhost:6001/api/v1/SuperCourse/AssignDoctorToCourse" + '/' + CID , newDoc)
    .pipe(
      retry(3),
      catchError(this.errorHandl) )
  }

}
