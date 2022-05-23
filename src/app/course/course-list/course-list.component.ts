import { CourseService } from './../../student/services/course.service';
import { Course } from './../../student/model/course';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {
  displayedColumns = ['ID', 'Name'];
  dataSource!: MatTableDataSource<Course>;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
      this.fetchCourses()
  }

  addCourse(courseName: string) {
    console.log(courseName);
    this.courseService.saveCourse(courseName).subscribe(() => {
      this.fetchCourses();
    });
  }

  private fetchCourses() {
    this.courseService.fetchCourse().subscribe((data)=>{
      let result = data.data.courses as Course[];
      this.dataSource = new MatTableDataSource(result);

    })
  }

}
