import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Student} from "../model/model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {StudentDetailsRequest, StudentRequest} from "../model/request";

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  id = this.data ? this.data.id : null
  firstName!: string
  lastName!: string
  age!: string
  dateOfBirth!: string
  contactNumber!: string
  studentDetailsId!: number
  errorType =  ErrorType


  registerForm = new FormGroup({
    firstNameControl: new FormControl(this.firstName, [Validators.nullValidator, Validators.minLength(3), Validators.required]),
    lastNameControl: new FormControl(this.lastName, [Validators.nullValidator, Validators.minLength(3), Validators.required]),
    ageControl: new FormControl(this.age, [Validators.nullValidator, Validators.pattern('^[0-9]*$'), Validators.required]),
    dateOfBirthControl: new FormControl(this.dateOfBirth, [Validators.nullValidator, Validators.minLength(10), Validators.required]),
    contactNumberControl: new FormControl(this.contactNumber, [Validators.nullValidator, Validators.maxLength(10), Validators.required])

  })


  constructor(@Inject(MAT_DIALOG_DATA) public data: Student) {
    this.setUpData(data)
  }


  ngOnInit(): void {
  }

  getErrorMessage(errorTye: ErrorType): string {
    switch (errorTye) {
      case ErrorType.firstName:
        return "Invalid first name";
      case ErrorType.lastName:
        return "Invalid last name";
      case ErrorType.age:
        return "Enter proper age"
      case ErrorType.contactNumber:
        return "Invalid contact number"
      case ErrorType.dateOfBirth:
        return "Invalid Date of birth"
      default:
        return "Un known error";
    }

  }

  getStudentRequestBody(): StudentRequest {
    return new StudentRequest(this.id, this.firstName, this.lastName,
      new StudentDetailsRequest(this.studentDetailsId, parseInt(this.age), this.dateOfBirth, this.contactNumber));
  }

  setUpData(student: Student): string {
    if (student != null) {
      this.firstName = student.firstName
      this.lastName = student.lastName

      if (student.studentDetails != null) {
        let studentDetails = student.studentDetails
        this.studentDetailsId = studentDetails.id
        this.age = studentDetails.age.toString()
        this.contactNumber = studentDetails.contactNumber.toString()
        this.dateOfBirth = studentDetails.dateOfBirth.toString()
      }
    }
    return ''
  }

}

enum ErrorType {
  firstName,
  lastName,
  age,
  dateOfBirth,
  contactNumber
}

