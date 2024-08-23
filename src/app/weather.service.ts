import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'ce84aec3b69024cdb9449e0bf3c14b08'
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather'

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<any>{
    return this.http.get(`${this.apiUrl}?q=${city}&appid=${this.apiKey}`)
  }
}
