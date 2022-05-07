import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Root} from "../model/model";
import {StudentRequest} from "../model/request";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  @Output()
  studentList = new EventEmitter<Root>()


  constructor(private http: HttpClient) {
    this.updateStudentList()

  }

  postStudentData(data: StudentRequest): Observable<any> {
    return this.http.post<StudentRequest>('http://localhost:3000/api/students', data)
  }

  updateStudentList() {
    this.http.get<Root>('http://localhost:3000/api/students').subscribe(root => {
      this.studentList.emit(root)
    })
  }
}
