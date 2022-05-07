import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {StudentDetailsComponent} from "../../student-details/student-details.component";
import {auto} from "@popperjs/core";
import {Student} from "../../model/model";

@Component({
  selector: 'app-student-action',
  templateUrl: './student-action.component.html',
  styleUrls: ['./student-action.component.css']
})
export class StudentActionComponent implements OnInit {

  @Input() student = ''

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  onViewClicked() {
    console.log(this.student)
    const dialogRef = this.dialog.open(StudentDetailsComponent, {data: this.student, width: auto})
    dialogRef.afterClosed().subscribe(result => {

      console.log(`Dialog result: ${result as Student}`);
      console.log(result as Student)
    });
  }

}
