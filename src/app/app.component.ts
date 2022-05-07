import {Component, EventEmitter, Output} from '@angular/core';
import {StudentDetailsComponent} from "./student/student-details/student-details.component";
import {auto} from "@popperjs/core";
import {Student} from "./student/model/model";
import {MatDialog} from "@angular/material/dialog";
import {StudentService} from "./student/services/student.service";
import {StudentRequest} from "./student/model/request";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StudentService]
})
export class AppComponent {
  title = 'school-management';
  toolBarTitle = "Students"

  constructor(public dialog: MatDialog, public service: StudentService) {
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

  updateTitle(totalCount: number) {
    this.toolBarTitle = 'Students : ' + totalCount
  }


}
