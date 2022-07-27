import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtherComponent } from './components/other/other.component';
import { WeatherComponent } from './components/weather/weather.component';

const routes: Routes = [
  {path: 'weather', component: WeatherComponent},
  {path: 'other', component: OtherComponent},
  {path: '', redirectTo: '/weather', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
