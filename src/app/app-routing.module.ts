import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { ProductsComponent } from './products/products.component';
import { EmployeeComponent } from './employee/employee.component';
import { FlipcartComponent } from './flipcart/flipcart.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { PinterestComponent } from './pinterest/pinterest.component';
import { AccountsComponent } from './accounts/accounts.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreatUserComponent } from './creat-user/creat-user.component';
import { CreatStudentComponent } from './creat-student/creat-student.component';
import { StudentAPIComponent } from './student-api/student-api.component';
import { WeatherComponent } from './weather/weather.component';
import { MailComponent } from './mail/mail.component';
import { FlipcartappComponent } from './flipcartapp/flipcartapp.component';
import { VehicleDetailsService } from './vehicle-details.service';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { EditVehicleComponent } from './edit-vehicle/edit-vehicle.component';
import { AuthenticationGuard } from './authentication.guard';
import { LoginComponent } from './login/login.component';
import { Sibiling1Component } from './sibiling1/sibiling1.component';
import { ParentComponent } from './parent/parent.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent,canActivate:[AuthenticationGuard],children:[
   {path:'welcome',component:WelcomeComponent},
   {path:'calculator',component:CalculatorComponent},
   {path:'databinding',component:DatabindingComponent},
   {path:'rectangle',component:RectangleComponent},
   {path:'circle',component:CircleComponent},
   {path:'bmi',component:BmiComponent},
   {path:'directives',component:ProductsComponent},
   {path:'employee',component:EmployeeComponent},
   {path:'flipcart',component:FlipcartComponent},
   {path:'vehicle',component:VehicleComponent},
   {path:'pinterest',component:PinterestComponent},
   {path:'accounts',component:AccountsComponent},
   {path:'create-vehicle',component:CreateVehicleComponent},
   {path:'creat-user',component:CreatUserComponent},
   {path:'creat-student',component:CreatStudentComponent},
   {path:'studentAPI',component:StudentAPIComponent},
   {path:'weather',component:WeatherComponent},
   {path:'mail',component:MailComponent},
   {path:'flipcartapp',component:FlipcartappComponent},
   {path:'vehicle-details/:id',component:VehicleDetailsComponent},
   {path:'edit-vehicle/:id',component:CreateVehicleComponent},
   
   {path:'sibiling1',component:Sibiling1Component},
   {path:'parent',component:ParentComponent},
   {path:'life-cycle-hooks',component:LifeCycleHooksComponent}
  ]}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
