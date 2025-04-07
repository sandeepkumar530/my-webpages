import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private _router:Router){}
logout(){
  if(confirm("Are you sure want to logout?")==true){
    sessionStorage.removeItem('token');
    alert("You have successfullly loggedout!");
    this._router.navigateByUrl("");
  }else{
    alert("You have cancelled");
  }

  
}
}

