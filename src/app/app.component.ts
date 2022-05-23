import {Component, OnInit} from '@angular/core';
import {StudentService} from "./student/services/student.service";
import {ThemePalette} from "@angular/material/core";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StudentService]
})
export class AppComponent implements OnInit{

  background: ThemePalette = undefined;
  routerLink = ['student-list','courses']
  activeLink = this.routerLink[0]

  constructor(private router:Router) {
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd) {
        this.activeLink = val.url.substring(1)
        if(this.activeLink==='') {
          this.activeLink = this.routerLink[0]
        }
      }

  });
  }
  ngOnInit() {
  }


}
