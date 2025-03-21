import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-creat-user',
  templateUrl: './creat-user.component.html',
  styleUrls: ['./creat-user.component.css']
})
export class CreatUserComponent {
  public userForm:FormGroup=new FormGroup({
    name:new FormControl(),
    email:new FormControl(),
    password:new FormControl(),
    mobile:new FormControl(),
    //nestgroup
    address:new FormGroup({
    city:new FormControl(),
    state:new FormControl(),
    pincode:new FormControl(),  
  }),
  type:new FormControl(),
//busFee:new FormControl(),
//hostelFee:new FormControl(),
})
constructor(){
  this.userForm.get('type')?.valueChanges.subscribe(
    (data:any)=>{
      if(data=='dayScholar'){
        this.userForm.addControl('busFee',new FormControl());
        this.userForm.removeControl('hostelFee');
      }else{
        this.userForm.addControl('hostelFee',new FormControl());
        this.userForm.removeControl('busFee');
      }
    }
  )
}
submit(){
  console.log(this.userForm.value);
}

}
