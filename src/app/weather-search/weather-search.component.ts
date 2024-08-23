
import { provideHttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-weather-search',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent {
  searchForm: FormGroup;

  constructor(private fb:FormBuilder, private router:Router){
    this.searchForm = fb.group({
      cityName : ''
    });
  }

  onSubmit(){
    const city = this.searchForm.get('cityName')?.value
    console.log("search for city:", city)
    if(city){
      this.router.navigate(['/weather'], { queryParams: { city } });
    }
  }

}
