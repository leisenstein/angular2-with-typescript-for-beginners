import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';
@Component({
    template: `
        <h3>Archive for: {{month}}/{{year}}</h3>
    `,
    directives: []
})
export class ArchiveComponent implements OnInit{
    month;
    year;

    constructor(private _routeParams: RouteParams) {

    }
    ngOnInit() {
        console.log('Route Params: ' + JSON.stringify(this._routeParams.params));
        this.month = this._routeParams.get("month");
        this.year = this._routeParams.get("year");
    }
}