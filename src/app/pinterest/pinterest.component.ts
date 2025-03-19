import { Component } from '@angular/core';
import { PinterestService } from '../pinterest.service';

@Component({
  selector: 'app-pinterest',
  templateUrl: './pinterest.component.html',
  styleUrls: ['./pinterest.component.css']
})
export class PinterestComponent {
  pinterests:any=[];
  constructor(private _pinterestService:PinterestService){
    _pinterestService.getPinterests().subscribe(
      (data:any)=>{
        console.log(data);
        this.pinterests=data;
      },(err:any)=>{
        alert("internal server error")
      }
    )
  }

}
