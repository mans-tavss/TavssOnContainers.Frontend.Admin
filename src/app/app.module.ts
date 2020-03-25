import * as platformBrowser from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FilterPipe } from '../app/filter.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralAppComponent } from './general-app/general-app.component';
import { DoctorComponent } from './doctor/doctor.component';
import { TAComponent } from './ta/ta.component';
import { StudentComponent } from './student/student.component';

import { RegisterTaComponent } from './ta/register-ta/register-ta.component';
import { RegisterDoctorComponent } from './doctor/register-doctor/register-doctor.component';
import { RegisterStudentComponent } from './student/register-student/register-student.component';
import { DetailsStComponent } from './student/details-st/details-st.component';
import { UpdateStComponent } from './student/update-st/update-st.component';
import { DetailsDoctorComponent } from './doctor/details-doctor/details-doctor.component';

import { DetailsTaComponent } from './ta/details-ta/details-ta.component';
import { UpdateTaComponent } from './ta/update-ta/update-ta.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateDoctorComponent } from './doctor/update-doctor/update-doctor.component';
import { RegStudentService } from './student/StudentService/reg-student.service';
import { CoursesComponent } from './courses/courses.component';
import { PasswordPatternDirective } from "./directives/PasswordPatternDirective";
import { MatchPasswordDirective } from "./directives/MatchPasswordDirective";
import { ValidateUserNameDirective } from "./directives/ValidateUserNameDirective";
import { CreateCourseComponent } from './courses/create-course/create-course.component';
import * as detailsCourseComponent from './courses/details-course/details-course.component';
import { UpdateCourseComponent } from './courses/update-course/update-course.component';
import { ProjectComponent } from './project/project.component';
import { DetailsProjectComponent } from './project/details-project/details-project.component';
import { UpdateProjectComponent } from './project/update-project/update-project.component';
import { CommuntyComponent } from './communty/communty.component';
import { CreateCommComponent } from './communty/create-comm/create-comm.component';
import { DetailsCommComponent } from './communty/details-comm/details-comm.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ControlPageComponent } from './control-page/control-page.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { RanksComponent } from './monitoring/ranks/ranks.component';






@NgModule({
  declarations: [
    AppComponent,
    GeneralAppComponent,
    DoctorComponent,
    TAComponent,
    StudentComponent,
    RegisterTaComponent,
    RegisterDoctorComponent,
    RegisterStudentComponent,
    DetailsStComponent,
    UpdateStComponent,
    DetailsDoctorComponent,
    DetailsTaComponent,
    UpdateTaComponent,
    UpdateDoctorComponent,
    CoursesComponent,
    FilterPipe,
    PasswordPatternDirective,
    MatchPasswordDirective,
    ValidateUserNameDirective,
    CreateCourseComponent,
    detailsCourseComponent.DetailsCourseComponent,
    UpdateCourseComponent,
    ProjectComponent,
    DetailsProjectComponent,
    UpdateProjectComponent,
    CommuntyComponent,
    CreateCommComponent,
    DetailsCommComponent,
    SidebarComponent,
    ControlPageComponent,
    AdminLoginComponent,
    MonitoringComponent,
    RanksComponent,

    
    
  ],
  imports: [
    platformBrowser.BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
    
  ],
  providers: [RegStudentService],
  bootstrap: [AppComponent,AdminLoginComponent]
})
export class AppModule { }
