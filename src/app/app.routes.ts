import { Routes } from '@angular/router';
import { WeatherSearchComponent } from './weather-search/weather-search.component';
import { WeatherDisplayComponent } from './weather-display/weather-display.component';

export const routes: Routes = [
    { path: '', component : WeatherSearchComponent },
    { path: 'weather', component : WeatherDisplayComponent }
];
