import { Component, OnInit } from '@angular/core';
import { Country } from '../../models/country';
import { AllCountriesService } from '../../services/all-countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

    public countries:Country[];

  constructor(private allCountries:AllCountriesService) { }


  ngOnInit() {
    this.allCountries.getAllCountries().subscribe((country) => {
        this.countries = country;
        console.log(this.countries);
    });

  }

}
