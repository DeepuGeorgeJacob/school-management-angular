import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {StudentService} from "../services/student.service";
import {StudentDetailsComponent} from "../student-details/student-details.component";
import {auto} from "@popperjs/core";
import {StudentRequest} from "../model/request";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  title = 'school-management';
  studentCount = this.service.studentCount

  constructor(public dialog: MatDialog, public service: StudentService) {
  }

  ngOnInit(): void {
    this.service.studentCount$.subscribe((count)=>{
      this.studentCount = count
    })
  }

  onAddRecord() {
    const dialogRef = this.dialog.open(StudentDetailsComponent, {data: null, width: auto})
    dialogRef.afterClosed().subscribe(result => {
      const result1 = result as { action: boolean, data: StudentRequest };
      if (result1.action) {
        this.service.postStudentData(result1.data).subscribe(res => {
          this.service.updateStudentList()
        })
      }

      console.log(`Dialog result: ${result1}`);
    });
  }




}
