import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  saveCourse(courseName:string):Observable<any> {
    return this.http
      .post<any>('http://localhost:9090/student-service/api/course',courseName)

  }

  fetchCourse():Observable<any> {
    return this.http
    .get<any>('http://localhost:9090/student-service/api/course')
  }


}
