import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from "./not-found/page-not-found/page-not-found.component";
import { HomeComponent } from "./student/home/home.component";
import { EnhancedDetailsComponent } from "./student/details/enhanced-details/enhanced-details.component";

const routes: Routes = [
  {
    path: 'student-list', component: HomeComponent
  },
  { path: 'student-list/:id', component: EnhancedDetailsComponent },
  {
    path: '', component: HomeComponent
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
