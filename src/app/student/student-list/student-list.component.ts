import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {StudentService} from "../services/student.service";
import {MatTableDataSource} from "@angular/material/table";
import {Student} from "../model/student-list";
import {StudentDetailsRequest, StudentRequest} from "../model/request";


@Component({
  selector: 'student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  displayedColumns = ["ID", "First Name", "Last Name", "Action"]
  dataSource!: MatTableDataSource<Student>;

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.studentService.studentList$.subscribe((data => {
      let result = data.data
      this.dataSource = new MatTableDataSource(result)
    }));
  }
}
