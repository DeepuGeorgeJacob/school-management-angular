import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {StudentDetailsComponent} from "../../student-details/student-details.component";
import {auto} from "@popperjs/core";
import {Student} from "../../model/student-list";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-student-action',
  templateUrl: './student-action.component.html',
  styleUrls: ['./student-action.component.css']
})
export class StudentActionComponent implements OnInit {

  @Input() student!:Student

  constructor(public dialog: MatDialog, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  onViewClicked() {

    if (true) {
      this.router.navigate([this.student.id], {relativeTo: this.route, state: this.student}).then(() =>{

      });
    } else {
      console.log(this.student)
      const dialogRef = this.dialog.open(StudentDetailsComponent, {data: this.student, width: auto})
      dialogRef.afterClosed().subscribe(result => {

        console.log(`Dialog result: ${result as Student}`);
        console.log(result as Student)
      });
    }
  }

}
