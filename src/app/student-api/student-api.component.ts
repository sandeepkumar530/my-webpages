import { Component } from '@angular/core';
import { StudentAPIService } from '../student-api.service';

@Component({
  selector: 'app-student-api',
  templateUrl: './student-api.component.html',
  styleUrls: ['./student-api.component.css']
})
export class StudentAPIComponent {
  term:string='';
  column:string='';
    order:string='';

  studentAPIs:any=[];
  constructor(private _studentAPIService:StudentAPIService){
    this.loadStudentAPIs();
    }
    filter(){
      this._studentAPIService.getFilteredStudentAPIs(this.term).subscribe(
        (data:any)=>{
          console.log(data);
          this.studentAPIs=data;
        },(err:any)=>{
          alert("internal server error!")
        }
      )
    }
    
    sort(){
      this._studentAPIService.getSortedStudentAPIs(this.column,this.order).subscribe(
        (data:any)=>{
          console.log(data);
          this.studentAPIs=data;
        },(err:any)=>{
          alert("internel server error!");
        }
      )
    }
    loadStudentAPIs(){
      this._studentAPIService.getStudentAPIs().subscribe(
        (data:any)=>{
          console.log(data);
          this.studentAPIs=data;
          console.log(this.studentAPIs);
        },(err:any)=>{
          alert("internel server error");
        }
      )
  
    }
  
    limit:string='';
    page:string='';
    pagination(){
      this._studentAPIService.getPaginatedStudentAPIs(this.limit,this.page).subscribe(
        (data:any)=>{
          console.log(data);
          this.studentAPIs=data;
        },(err:any)=>{
          alert("internal server error!")
        }
      )
    }
}
