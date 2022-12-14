import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) { }

  getCurrentWeatherForCity(city: string): Observable<any>
  {
    const path = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=695ed9f29c4599b7544d0db5c211d499&units=metric`
    
    return this.http.get(path);
  }
}
