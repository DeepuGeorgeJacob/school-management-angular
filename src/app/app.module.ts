import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from "@angular/material/toolbar";
import { StudentListComponent } from './student/student-list/student-list.component';
import { MatTableModule } from "@angular/material/table";
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { StudentActionComponent } from './student/menu/student-action/student-action.component';
import { MatMenuModule } from "@angular/material/menu";
import { StudentDetailsComponent } from './student/student-details/student-details.component';
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from './student/home/home.component';
import { MatTabsModule } from "@angular/material/tabs";
import { PageNotFoundComponent } from './not-found/page-not-found/page-not-found.component';
import { MatCardModule } from "@angular/material/card";
import { MatBadgeModule } from "@angular/material/badge";
import { EnhancedDetailsComponent } from './student/details/enhanced-details/enhanced-details.component';
import { MatExpansionModule } from "@angular/material/expansion";
import { MatListModule } from "@angular/material/list";
import { DetailsEditComponent } from './student/details-edit/details-edit.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { PerformanceEditComponent } from './student/performance-edit/performance-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentActionComponent,
    StudentDetailsComponent,
    HomeComponent,
    PageNotFoundComponent,
    EnhancedDetailsComponent,
    DetailsEditComponent,
    PerformanceEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatCardModule,
    MatBadgeModule,
    MatExpansionModule,
    MatListModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
