import { Component, TemplateRef } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {
  column:string='';
  order:string='';
  term:string='';
  vehicles:any=[];
 
  constructor(private _vehicleService:VehicleService){
    this.loadVehicles();
    
    }

    filter(){
      this._vehicleService.getFilteredVehicles(this.term).subscribe(
  (data:any)=>{
    console.log(data);
    this.vehicles=data;
  },(err:any)=>{
    alert("Internal server error!");
  }
)
  }
    
  sort(){
    this._vehicleService.getSortedVehicles(this.column,this.order).subscribe(
      (data:any)=>{
        console.log(data);
        this.vehicles=data;
      },(err:any)=>{
        alert("internel server error");
      }
    )
  }
  loadVehicles(){
    this._vehicleService.getVehicles().subscribe(
      (data:any)=>{
        console.log(data);
        this.vehicles=data;
        console.log(this.vehicles);
      },(err:any)=>{
        alert("internel server error");
      }
    )

  }
  delete(id:any){

    if(confirm("are you sure want to delete")==true){
    this._vehicleService.deleteVehicle(id).subscribe(
      (data:any)=>{
        alert("record deleted successfully")
        this.loadVehicles();
      },(err:any)=>{
        alert("internal server error");
      }
    )}
    else{
      alert("no need to delete")
    }
  }

  limit:string="";
  page:string="";
  pagination(){
    this._vehicleService.getPaginatedVehicles(this.limit,this.page).subscribe(
      (data:any)=>{
        console.log(data);
        this.vehicles=data;
    
      },(err:any)=>{
        alert("internel server error")
      }
    )

  }
    }
  


