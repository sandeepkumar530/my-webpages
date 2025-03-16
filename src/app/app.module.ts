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
    FlipcartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
