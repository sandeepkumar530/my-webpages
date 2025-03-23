import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
weathers:any=[];
constructor(private _weatherService:WeatherService){
  _weatherService.getWeathers().subscribe(
    (data:any)=>{
      console.log(data);
      this.weathers=data;
    },(err:any)=>{
      alert('internal server error')
    }
  )
}
getDotColor(temperature: number): string {
  if (temperature < 0) {
    return 'blue';
  } else if (temperature >= 0 && temperature <= 30) {
    return 'yellow';
  } else if (temperature > 30 && temperature <= 35) {
    return 'green';
  } else {
    return 'red';
  }
}
}
