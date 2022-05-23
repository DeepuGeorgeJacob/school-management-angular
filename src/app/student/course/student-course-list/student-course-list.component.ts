import { Course } from './../../model/course';
import { CourseService } from './../../services/course.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-student-course-list',
  templateUrl: './student-course-list.component.html',
  styleUrls: ['./student-course-list.component.css']
})
export class StudentCourseListComponent implements OnInit {

  @Output()
  selectedCourses = new EventEmitter<number[]>();

  toppings = new FormControl();

  toppingList: Course[] = [];

  constructor(private courseService:CourseService) { }

  ngOnInit(): void {
    this.courseService.fetchCourse().subscribe((result)=>{
      this.toppingList = result.data.courses

    })
  }
  onSelectionChange() {
    this.selectedCourses.emit(this.toppings.value)
  }



}
