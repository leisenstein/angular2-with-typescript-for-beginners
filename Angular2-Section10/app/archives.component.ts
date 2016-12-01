import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
@Component({
    template: `
    <h2>Archives</h2>
    <div *ngIf="isLoading">
        <i class="fa fa-spinner fa-spin fa-3x"></i>
    </div>

    <ul class="list-group">
        <li class="list-group-item" *ngFor="#archive of archiveItems">
            <a [routerLink]="['Archive', {year: archive.year, month: archive.month}]">{{archive.month}}/{{archive.year}}</a>
        </li>
    </ul>
    `,
    directives: [ROUTER_DIRECTIVES]
})
export class ArchivesComponent implements OnInit{
    isLoading = true; 
    archiveItems;

    ngOnInit() {
        this.isLoading = false;
        this.archiveItems = [{ month: 1, year: 2000 }, { month: 2, year: 2000 }, { month: 3, year: 2000 }];
    }
}