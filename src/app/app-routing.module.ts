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

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent,children:[
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
   {path:'pinterest',component:PinterestComponent}
  ]}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
