import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  city:string = ''
  weatherData: any;
  showCurrent: boolean = true;
  constructor(private weather: WeatherService) { }

  ngOnInit() : void {

  }

  getCurrentWeather(): void {
    this.weather.getCurrentWeatherForCity(this.city).subscribe(data =>
    this.weatherData = {
      ...data,
      icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    }
    )
  }

}
