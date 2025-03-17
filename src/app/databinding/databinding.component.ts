import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  click(){
    alert("Hellooo!");
  }
  submit(){
    alert("Hi");
  }
  Age:number=45;
  name:string='Sudip';
  
  isData:boolean=true;
  
  
  }
  

