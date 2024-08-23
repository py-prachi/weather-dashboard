import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather-display.component.html',
  styleUrl: './weather-display.component.css'
})
export class WeatherDisplayComponent implements OnInit{

  weatherData:any;

  constructor(private route: ActivatedRoute ,private weatherService: WeatherService){}
  ngOnInit(): void {

    this.route.queryParams.subscribe(params =>{
      const city = params['city'];
      if(city){
        this.weatherService.getWeather(city).subscribe({
          next: (data) => {
            this.weatherData = data;
            console.log(data);
          },
          error: (error) => {
            console.error('Error fetching weather data', error); 
          },
          complete: () => {
            console.log('Data fetching completed');
          }
        });
      }
    })
 
    
  }
  convertToCelcius(tempF: number): number {
    return tempF - 273.15
 }
}


