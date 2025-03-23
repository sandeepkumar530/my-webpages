import { Component } from '@angular/core';
import { StudentAPIService } from '../student-api.service';

@Component({
  selector: 'app-student-api',
  templateUrl: './student-api.component.html',
  styleUrls: ['./student-api.component.css']
})
export class StudentAPIComponent {

  studentAPIs:any=[];
  constructor(private _studentAPIService:StudentAPIService){
    _studentAPIService.getStudentAPIs().subscribe(
      (data:any)=>{
        console.log(data);
        this.studentAPIs=data;
      },(err:any)=>{
        alert("internal server error")
      }
    )
    }
  

}
