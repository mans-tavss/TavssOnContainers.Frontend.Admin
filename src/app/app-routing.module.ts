import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorComponent } from './doctor/doctor.component';
import { GeneralAppComponent } from './general-app/general-app.component';
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
import { UpdateDoctorComponent } from './doctor/update-doctor/update-doctor.component';
import { CoursesComponent } from './courses/courses.component';
import { CreateCourseComponent } from './courses/create-course/create-course.component';
import { DetailsCourseComponent } from './courses/details-course/details-course.component';
import { UpdateCourseComponent } from './courses/update-course/update-course.component';
import { ProjectComponent } from './project/project.component';
import { DetailsProjectComponent } from './project/details-project/details-project.component';
import { UpdateProjectComponent } from './project/update-project/update-project.component';
import { CommuntyComponent } from './communty/communty.component';
import { CreateCommComponent } from './communty/create-comm/create-comm.component';
import { DetailsCommComponent } from './communty/details-comm/details-comm.component';
import {ControlPageComponent} from './control-page/control-page.component'
import {AdminLoginComponent} from './admin-login/admin-login.component'
import { MonitoringComponent } from './monitoring/monitoring.component';
import { RanksComponent } from './monitoring/ranks/ranks.component';

const routes: Routes = [
  { path: 'general' , component: AdminLoginComponent },
  {path:'Controlpanel'  , children :[
    { path: 'doctor',outlet:'control' , component: DoctorComponent },
    { path: 'monitor',outlet:'control' , component: MonitoringComponent },
    { path: 'ranks',outlet:'control' , component: RanksComponent },

  { path: 'TA',outlet:'control' , component: TAComponent },
  { path: 'student',outlet:'control' , component: StudentComponent },
  { path: 'RegisterTA',outlet:'control' , component:RegisterTaComponent },
  { path: 'TAdetails/:id',outlet:'control', component:DetailsTaComponent },
  { path: 'UpdateTA/:id' ,outlet:'control', component: UpdateTaComponent },
  { path: 'RegisterStudent' ,outlet:'control', component: RegisterStudentComponent },
  { path: 'StudentDetails/:id' ,outlet:'control', component:DetailsStComponent },
  { path: 'StudentUpdate/:id',outlet:'control' , component: UpdateStComponent },
  { path: 'RegisterDoctor' ,outlet:'control', component: RegisterDoctorComponent },
  { path: 'DoctorDetails/:id',outlet:'control' , component:DetailsDoctorComponent },
  { path: 'UpdateDoctor/:id',outlet:'control' , component: UpdateDoctorComponent },
  //Courses
  { path: 'Courses',outlet:'control' , component:CoursesComponent },
  { path: 'createCourse' ,outlet:'control', component:CreateCourseComponent },
  { path: 'detailsCourse/:id' ,outlet:'control' , component: DetailsCourseComponent},
  { path: 'updateCourse/:id',outlet:'control' , component : UpdateCourseComponent },
  //Projects
  { path: 'Project' ,outlet:'control', component : ProjectComponent },
  { path: 'ProjectDetails/:id',outlet:'control' , component : DetailsProjectComponent },
  { path: 'updateProject/:id' ,outlet:'control', component: UpdateProjectComponent },
  //Communty
  { path:'Communty',outlet:'control' , component : CommuntyComponent},
  { path:'Createcomm' ,outlet:'control', component : CreateCommComponent},
  { path:'Detailscomm/:id' ,outlet:'control', component : DetailsCommComponent},
  
], component:ControlPageComponent},
  { path: '', redirectTo:'/general' , pathMatch:'full' },
  
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
