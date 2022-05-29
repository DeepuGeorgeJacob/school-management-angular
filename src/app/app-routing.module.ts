import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from "./not-found/page-not-found/page-not-found.component";
import {HomeComponent} from "./student/home/home.component";
import {EnhancedDetailsComponent} from "./student/details/enhanced-details/enhanced-details.component";
import {CourseListComponent} from './course/course-list/course-list.component';
import {StudentResolver} from "./student/resolvers/student-resolver";
import {TemplateFormComponent} from "./debug/template/template-form/template-form.component";

const routes: Routes = [
  {
    path:'template-driven-form', component:TemplateFormComponent
  },
  {
    path: 'student-list', component: HomeComponent
  },
  {
    path: 'courses', component: CourseListComponent
  },
  {path: 'student-list/:id', component: EnhancedDetailsComponent, resolve: {selectedStudent: StudentResolver}},
  {
    path: '', redirectTo: 'student-list', pathMatch: 'full'
  },
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
