import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-creat-student',
  templateUrl: './creat-student.component.html',
  styleUrls: ['./creat-student.component.css']
})
export class CreatStudentComponent {
 
public studentForm:FormGroup=new FormGroup({
  name:new FormControl(),
  class:new FormControl(),
  fatherName:new FormControl(),
  email:new FormControl(),
  dob:new FormControl(),
  address:new FormGroup({
    city:new FormControl(),
    state:new FormControl(),
    pincode:new FormControl(),
  }),
  type:new FormControl(),
  markss:new FormArray([]),
})
get markssFormArray(){
  return this.studentForm.get('markss') as FormArray;
}
addmarks(){
  this.markssFormArray.push(
    new FormGroup({
    class:new FormControl(),
    year:new FormControl(),
    persentage:new FormControl(),
})
  )
}
deletemarks(i:number){
  this.markssFormArray.removeAt(i);
}
constructor(){
  this.studentForm.get('type')?.valueChanges.subscribe(
    (data:any)=>{
      if(data=='dayScholar'){
        this.studentForm.addControl('busFee',new FormControl());
        this.studentForm.removeControl('hostelFee');
      }else{
        this.studentForm.addControl('hostelFee',new FormControl());
        this.studentForm.removeControl('busFee');
      }
    }
  )
}
submit(){
  console.log(this.studentForm.value);
}
}
