import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Performance } from '../model/student-list';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-performance-edit',
  templateUrl: './performance-edit.component.html',
  styleUrls: ['./performance-edit.component.css'],
})
export class PerformanceEditComponent implements OnInit {
  lastPerformance: number = this.performance?.lastPerformance
  bestPerformance: number = this.performance?.bestPerformance;

  registerForm = new FormGroup({
    lastPerformanceControlControl: new FormControl(this.lastPerformance, [
      Validators.nullValidator,
      Validators.pattern('^[0-9]*$'),
      Validators.required,
    ]),
    bestPerformanceControlControl: new FormControl(this.bestPerformance, [
      Validators.nullValidator,
      Validators.pattern('^[0-9]*$'),
      Validators.required,
    ]),
  });

  constructor(@Inject(MAT_DIALOG_DATA) public performance: Performance) {}

  ngOnInit(): void {}

  saveData() {
    var perData = {
      lastPerformance:
        this.registerForm.controls['lastPerformanceControlControl'].value,
      bestPerformance:
        this.registerForm.controls['bestPerformanceControlControl'].value,
      id: this.performance?.id
    };
    return perData;
  }
}
