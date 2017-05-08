"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Subject_1 = require('rxjs/Subject');
require('rxjs/add/operator/switchMap');
var weather_service_1 = require('./weather.service');
var WeatherComponent = (function () {
    function WeatherComponent(weatherService) {
        var _this = this;
        this.weatherService = weatherService;
        this.isVisible = false;
        this.searchTermStream = new Subject_1.Subject();
        this.items = this.searchTermStream
            .switchMap(function (term) { return _this.weatherService.search(term); })
            .subscribe(function (data) { _this.isVisible = true; console.log(data); _this.items = data; });
    }
    WeatherComponent.prototype.search = function (term) { this.isVisible = false; this.searchTermStream.next(term); };
    WeatherComponent = __decorate([
        core_1.Component({
            selector: 'gs-weather',
            templateUrl: 'app/weather/weather.component.html',
            providers: [weather_service_1.WeatherService],
        }), 
        __metadata('design:paramtypes', [weather_service_1.WeatherService])
    ], WeatherComponent);
    return WeatherComponent;
}());
exports.WeatherComponent = WeatherComponent;
//# sourceMappingURL=weather.component.js.map