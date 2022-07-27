import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './components/weather/weather.component';
import { OtherComponent } from './components/other/other.component';
import { FormsModule } from '@angular/forms';
import { CurrentWeatherComponent, FloorPipe } from './components/weather/current-weather/current-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    OtherComponent,
    CurrentWeatherComponent,
    FloorPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
