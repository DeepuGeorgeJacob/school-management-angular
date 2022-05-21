import {Component, OnInit} from '@angular/core';
import {StudentService} from "./student/services/student.service";
import {ThemePalette} from "@angular/material/core";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StudentService]
})
export class AppComponent implements OnInit{

  background: ThemePalette = undefined;
  routerLink = ['student-list','Unknown']
  activeLink = this.routerLink[0]

  constructor(private route:ActivatedRoute) {
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params=>{
      console.log("ROUTES NAME "+params['name'])
    })
  }

}
