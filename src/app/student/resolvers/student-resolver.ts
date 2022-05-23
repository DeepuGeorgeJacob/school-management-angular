import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {StudentService} from "../services/student.service";
import {Injectable} from "@angular/core";

@Injectable({ providedIn: 'root' })
export class StudentResolver implements Resolve<any> {

  constructor(private studentService:StudentService) {

  }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    const id = route.paramMap.get('id');
    if(id === null) {
      return null
    } else {
      return this.studentService.getSelectedStudent(+id);
    }
  }

}
