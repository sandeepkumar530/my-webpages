import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-sibiling1',
  templateUrl: './sibiling1.component.html',
  styleUrls: ['./sibiling1.component.css']
})
export class Sibiling1Component {
  count:number=0;
  
  constructor(private _commonService:CommonService){
    
  }
  send(){
    console.log(this.count);
    this._commonService.countSub.next(this.count);
  }

}
