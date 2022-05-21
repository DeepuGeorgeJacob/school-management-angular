import { StudentDetailsRequest } from './../model/request';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Root, Student } from '../model/student-list';
import { StudentRequest } from '../model/request';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  studentList$ = new EventEmitter<Root>();
  studentCount$ = new EventEmitter<number>();
  student$ = new EventEmitter<Student>();
  studentCount = 0;
  studentList!: Root;

  constructor(private http: HttpClient) {
    this.updateStudentList();
  }

  postStudentData(data: StudentRequest): Observable<any> {
    return this.http.post<StudentRequest>(
      'http://localhost:3000/api/students',
      data
    );
  }

  updateStudentList() {
    this.http
      .get<Root>('http://localhost:3000/api/students')
      .subscribe((root) => {
        this.studentList = root;
        this.studentCount = root.data.length;
        this.studentCount$.emit(this.studentCount);
        this.studentList$.emit(root);
      });
  }

  getSelectedStudent(id: number): Observable<any> {
    return this.http.get<any>('http://localhost:3000/api/students/' + id);
  }

  updateStudentDetails(
    studentDetailsRequest: StudentDetailsRequest
  ): Observable<any> {
    return this.http.put<any>(
      'http://localhost:3000/api/student/details',
      studentDetailsRequest
    );
  }

  updatePerformanceDetails(requestData:{
    studentId:number,
    performanceId:number,
    bestPerformance:number,
    lastPerformance:number
  }) {
    return this.http.post<any>(
      'http://localhost:3000/api/students/performance',
      requestData
    );

  }



}
