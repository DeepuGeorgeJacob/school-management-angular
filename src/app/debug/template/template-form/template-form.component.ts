import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  @ViewChild('myForm') signUpForm: NgForm | undefined;
  defaultQuestion = "car"
  answer!: string;
  suggestedUserName = "Deepu George Jacob"

  constructor() {
  }

  ngOnInit(): void {
  }


  /*onSubmit(form:NgForm) {
    console.log(form);
  }*/
  onSubmit() {
    console.log(this.signUpForm);

  }

  getSuggestedUserName() {
    this.signUpForm?.form?.patchValue({
      userData:{
        userName:this.suggestedUserName
      }
    })
  }
}
