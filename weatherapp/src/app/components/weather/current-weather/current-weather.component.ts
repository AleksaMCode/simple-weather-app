import { Component, Input, OnInit, Pipe } from '@angular/core';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  @Input() data: any
  constructor() { }

  ngOnInit(): void {
  }

}

@Pipe({name: 'floor'})
export class FloorPipe {
  transform (input: number)
  {
    return Math.floor(input)
  }
}
