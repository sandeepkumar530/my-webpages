import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
  accountss:any=[];
  constructor(private _accountsService:AccountsService){
    _accountsService.getAccountss().subscribe(
      (data:any)=>{
        console.log(data);
        this.accountss=data;
      },(err:any)=>{
        alert('internal server error')
      }
    )
  }


}
