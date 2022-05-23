import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {StudentService} from "../services/student.service";
import {MatTableDataSource} from "@angular/material/table";
import {Student} from "../model/student-list";


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
    if(this.studentService.studentList === undefined) {
      this.studentService.getStudents().subscribe((data)=>{
        this.dataSource = new MatTableDataSource(data.data);
        this.studentService.cacheStudents(data)
      })
    } else {
      this.dataSource = new MatTableDataSource(this.studentService.studentList.data);
    }


    this.studentService.studentList$.subscribe((data)=>{
      this.dataSource = new MatTableDataSource(data.data)
    })
  }
}
