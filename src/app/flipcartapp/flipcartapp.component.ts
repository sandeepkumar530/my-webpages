import { Component } from '@angular/core';
import { FlipcartappService } from '../flipcartapp.service';

@Component({
  selector: 'app-flipcartapp',
  templateUrl: './flipcartapp.component.html',
  styleUrls: ['./flipcartapp.component.css']
})
export class FlipcartappComponent {
  flipcartapps:any=[];
  constructor(private _flipcartService:FlipcartappService){
_flipcartService.getFlipcartapps().subscribe(
  (data:any)=>{
    console.log(data);
    this.flipcartapps=data;
  },(err:any)=>{
    alert("internal server error")
  }
)
  }

}
