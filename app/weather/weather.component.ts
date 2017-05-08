import { Component }        from '@angular/core';
import { Subject }          from 'rxjs/Subject';
import 'rxjs/add/operator/switchMap';
import { WeatherService } from './weather.service';

@Component({
	selector: 'gs-weather',
	templateUrl: 'app/weather/weather.component.html',	
	providers: [WeatherService],
})

export class WeatherComponent {
	isVisible: boolean = false;
	
	 private searchTermStream = new Subject<string>();

	constructor (private weatherService: WeatherService) {}

	search(term: string) {this.isVisible = false;  this.searchTermStream.next(term); }

	items = this.searchTermStream	
    .switchMap((term: string) => this.weatherService.search(term))
    .subscribe(data => {this.isVisible = true; console.log(data); this.items =  data});    
}