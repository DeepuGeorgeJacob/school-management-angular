import {Course} from './../../model/course';
import {CourseService} from './../../services/course.service';
import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-student-course-list',
  templateUrl: './student-course-list.component.html',
  styleUrls: ['./student-course-list.component.css']
})
export class StudentCourseListComponent implements OnInit {

  @Output()
  selectedCourses = new EventEmitter<number[]>();

  @Input()
  enrolledCourses: Course[] = []

  currentEnrolledCourses = new FormControl();

  courses: Course[] = [];

  constructor(private courseService: CourseService) {
  }

  ngOnInit(): void {
    this.currentEnrolledCourses.patchValue([1, 2])
    this.courseService.fetchCourse().subscribe((result) => {
      this.courses = result.data.courses

    })
    this.currentEnrolledCourses.patchValue(this.enrolledCourses.map((course) => {
      return course.id
    }));

  }

  onSelectionChange() {
    console.log(this.currentEnrolledCourses)
    this.selectedCourses.emit(this.currentEnrolledCourses.value)
  }


}
