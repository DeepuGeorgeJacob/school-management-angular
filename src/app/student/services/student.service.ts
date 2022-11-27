import { StudentDetailsRequest } from '../model/request';
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
  studentCount = 0;
  studentList!: Root;

  constructor(private http: HttpClient) {
    this.updateStudentList();
  }

  postStudentData(data: StudentRequest): Observable<any> {
    return this.http.post<StudentRequest>(
      'http://localhost:9090/student-service/api/students',
      data
    );
  }

  getStudents():Observable<Root>{
    return this.http
      .get<Root>('http://localhost:9090/student-service/api/students')

  }

  updateStudentList() {
    this.http
      .get<Root>('http://localhost:9090/student-service/api/students')
      .subscribe((root) => {
        this.studentList = root;
        this.studentCount = root.data.length;
        this.studentCount$.emit(this.studentCount);
        this.studentList$.emit(root);
      });
  }

  getSelectedStudent(id: number): Observable<any> {
    return this.http.get<any>('http://localhost:9090/student-service/api/students/' + id);
  }

  updateStudentDetails(
    studentDetailsRequest: StudentDetailsRequest
  ): Observable<any> {
    return this.http.put<any>(
      'http://localhost:9090/student-service/api/student/details',
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
      'http://localhost:9090/student-service/api/students/performance',
      requestData
    );

  }

  saveCourses(selectedCourses:number[],studentId:number):Observable<any> {
    let requestBody = {
      id: studentId,
      courses: selectedCourses
    }
    return this.http.post<any>(
      'http://localhost:9090/student-service/api/students/update',
      requestBody
    );

  }
  cacheStudents(studentRoot:Root) {
    this.studentList = studentRoot
  }



}
