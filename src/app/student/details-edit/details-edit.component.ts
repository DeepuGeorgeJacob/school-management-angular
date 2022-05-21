import { StudentDetailsRequest } from './../model/request';
import { StudentDetails } from './../model/student-list';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-details-edit',
  templateUrl: './details-edit.component.html',
  styleUrls: ['./details-edit.component.css'],
})
export class DetailsEditComponent implements OnInit {

  age = this.studentDetails.age;
  dateOfBirth = this.studentDetails.dateOfBirth;
  contactNumber = this.studentDetails.contactNumber;

  registerForm = new FormGroup({
    ageControl: new FormControl(this.age, [
      Validators.nullValidator,
      Validators.pattern('^[0-9]*$'),
      Validators.required,
    ]),
    dateOfBirthControl: new FormControl(this.dateOfBirth, [
      Validators.nullValidator,
      Validators.minLength(10),
      Validators.required,
    ]),
    contactNumberControl: new FormControl(this.contactNumber, [
      Validators.nullValidator,
      Validators.maxLength(10),
      Validators.required,
    ]),
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public studentDetails: StudentDetails
  ) {}

  ngOnInit(): void {}

  saveData():StudentDetailsRequest {
    let age = this.registerForm.controls["ageControl"].value;
    let dateOfBirth = this.registerForm.controls["dateOfBirthControl"].value;
    let contactNumber = this.registerForm.controls["contactNumberControl"].value;
    let request = new StudentDetailsRequest(this.studentDetails.id,age,dateOfBirth,contactNumber);
    return request;
  }
}
