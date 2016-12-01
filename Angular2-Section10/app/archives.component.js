System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1;
    var ArchivesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ArchivesComponent = (function () {
                function ArchivesComponent() {
                    this.isLoading = true;
                }
                ArchivesComponent.prototype.ngOnInit = function () {
                    this.isLoading = false;
                    this.archiveItems = [{ month: 1, year: 2000 }, { month: 2, year: 2000 }, { month: 3, year: 2000 }];
                };
                ArchivesComponent = __decorate([
                    core_1.Component({
                        template: "\n    <h2>Archives</h2>\n    <div *ngIf=\"isLoading\">\n        <i class=\"fa fa-spinner fa-spin fa-3x\"></i>\n    </div>\n\n    <ul class=\"list-group\">\n        <li class=\"list-group-item\" *ngFor=\"#archive of archiveItems\">\n            <a [routerLink]=\"['Archive', {year: archive.year, month: archive.month}]\">{{archive.month}}/{{archive.year}}</a>\n        </li>\n    </ul>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ArchivesComponent);
                return ArchivesComponent;
            }());
            exports_1("ArchivesComponent", ArchivesComponent);
        }
    }
});
//# sourceMappingURL=archives.component.js.map