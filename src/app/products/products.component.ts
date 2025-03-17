import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products:any=[
    {name:'pen',price:10,rating:3.7},
    {name:'book',price:50,rating:2.0},
    {name:'shirt',price:350,rating:3.5},
    {name:'shoes',price:10000,rating:4.0},
    {name:'bike',price:50000,rating:3.9},
    {name:'car',price:700000,rating:3.4}
  ]
  states:string[]=['Andrapradesh','karnataka','kerala','tamilnadu','Telangana'];

  isVisible:boolean=true;

  newDate:any=new Date();
}

