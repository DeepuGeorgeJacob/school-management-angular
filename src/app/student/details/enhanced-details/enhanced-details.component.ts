import { PerformanceEditComponent } from './../../performance-edit/performance-edit.component';
import { StudentDetailsRequest } from './../../model/request';
import { DetailsEditComponent } from './../../details-edit/details-edit.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { Student } from '../../model/student-list';
import { MatDialog } from '@angular/material/dialog';
import { auto } from '@popperjs/core';

@Component({
  selector: 'app-enhanced-details',
  templateUrl: './enhanced-details.component.html',
  styleUrls: ['./enhanced-details.component.css'],
})
export class EnhancedDetailsComponent implements OnInit {
  selectedStudent!: Student;
  panelOpenState = false;
  isLoading = true;

  constructor(
    public dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    let id = parseInt(this.activatedRoute.snapshot.params['id']);
    this.showStudentDetails(id);
  }

  getPerformanceButtonText(): string {
    if (this.selectedStudent.performance === undefined) {
      return 'Add';
    } else {
      return 'Update';
    }
  }

  private showStudentDetails(id: number) {
    this.studentService.getSelectedStudent(id).subscribe((any) => {
      var student = any.data.student as Student;
      this.selectedStudent = student;
      this.isLoading = false;
    });
  }

  updateDetailsClicked() {
    const dialogRef = this.dialog.open(DetailsEditComponent, {
      data: this.selectedStudent.studentDetails,
      width: auto,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result.action) {
        this.isLoading = true;
        let studentDetailsRequestData = result.data as StudentDetailsRequest;
        this.studentService
          .updateStudentDetails(studentDetailsRequestData)
          .subscribe(() => {
            this.showStudentDetails(studentDetailsRequestData.id);
          });
      }
    });
  }

  saveOrUpdatePerformanceData() {
    const dialogRef = this.dialog.open(PerformanceEditComponent, {
      data: this.selectedStudent.performance,
      width: auto,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if(result.action) {
        this.isLoading = true
        let performanceData =  result.data;
        let requestData= {
          studentId:this.selectedStudent.id,
          performanceId: performanceData.id,
          bestPerformance: performanceData.bestPerformance,
          lastPerformance: performanceData.lastPerformance
        }
        this.studentService.updatePerformanceDetails(requestData).subscribe(()=>{
          this.showStudentDetails(this.selectedStudent.id)
        })
      }
    });


  }




}
