import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VehicleComponent } from './vehicle/vehicle.component';
import { HttpClientModule } from '@angular/common/http';
import { PinterestComponent } from './pinterest/pinterest.component';
import { AccountsComponent } from './accounts/accounts.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreatUserComponent } from './creat-user/creat-user.component';
import { CreatStudentComponent } from './creat-student/creat-student.component';
import { StudentAPIComponent } from './student-api/student-api.component';
import { WeatherComponent } from './weather/weather.component';
import { MailComponent } from './mail/mail.component';
import { FlipcartappComponent } from './flipcartapp/flipcartapp.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { EditVehicleComponent } from './edit-vehicle/edit-vehicle.component';
import { LoginComponent } from './login/login.component';
import { Sibiling1Component } from './sibiling1/sibiling1.component';
import { Sibiling2Component } from './sibiling2/sibiling2.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RatingComponent } from './rating/rating.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomeComponent,
    CalculatorComponent,
    DatabindingComponent,
    RectangleComponent,
    CircleComponent,
    BmiComponent,
    ProductsComponent,
    EmployeeComponent,
    FlipcartComponent,
    VehicleComponent,
    PinterestComponent,
    AccountsComponent,
    CreateVehicleComponent,
    CreatUserComponent,
    CreatStudentComponent,
    StudentAPIComponent,
    WeatherComponent,
    MailComponent,
    FlipcartappComponent,
    VehicleDetailsComponent,
    EditVehicleComponent,
    LoginComponent,
    Sibiling1Component,
    Sibiling2Component,
    ParentComponent,
    ChildComponent,
    RatingComponent,
    LifeCycleHooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
