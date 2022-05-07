import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {StudentService} from "../services/student.service";
import {MatTableDataSource} from "@angular/material/table";
import {Student} from "../model/model";


@Component({
  selector: 'student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  @Output() totalStudents = new EventEmitter<number>();
  displayedColumns = ["ID", "First Name", "Last Name", "Action"]
  dataSource!: MatTableDataSource<Student>;

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.studentService.studentList.subscribe((data=>{
      let result = data.data
      this.totalStudents.emit(result.length)
      this.dataSource = new MatTableDataSource(result)
    }));
  }


}
