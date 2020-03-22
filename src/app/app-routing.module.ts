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




const routes: Routes = [
  { path: 'general' , component: GeneralAppComponent },
  { path: '', redirectTo:'/general' , pathMatch:'full' },
  { path: 'doctor' , component: DoctorComponent },
  { path: 'TA' , component: TAComponent },
  { path: 'student' , component: StudentComponent },
  { path: 'RegisterTA' , component:RegisterTaComponent },
  { path: 'TAdetails/:id', component:DetailsTaComponent },
  { path: 'UpdateTA/:id' , component: UpdateTaComponent },
  { path: 'RegisterStudent' , component: RegisterStudentComponent },
  { path: 'StudentDetails/:id' , component:DetailsStComponent },
  { path: 'StudentUpdate/:id' , component: UpdateStComponent },
  { path: 'RegisterDoctor' , component: RegisterDoctorComponent },
  { path: 'DoctorDetails/:id' , component:DetailsDoctorComponent },
  { path: 'UpdateDoctor/:id' , component: UpdateDoctorComponent },
  //Courses
  { path: 'Courses' , component:CoursesComponent },
  { path: 'createCourse' , component:CreateCourseComponent },
  { path: 'detailsCourse/:id'  , component: DetailsCourseComponent},
  { path: 'updateCourse/:id' , component : UpdateCourseComponent },
  //Projects
  { path: 'Project' , component : ProjectComponent },
  { path: 'ProjectDetails/:id' , component : DetailsProjectComponent },
  { path: 'updateProject/:id' , component: UpdateProjectComponent },
  //Communty
  { path:'Communty' , component : CommuntyComponent},
  { path:'Createcomm' , component : CreateCommComponent},
  { path:'Detailscomm/:id' , component : DetailsCommComponent},
  

   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
