System.register(['angular2/core', './summary.pipe', './bootstrap.panel.component', './zippy.component'], function(exports_1, context_1) {
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
    var core_1, summary_pipe_1, bootstrap_panel_component_1, zippy_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (summary_pipe_1_1) {
                summary_pipe_1 = summary_pipe_1_1;
            },
            function (bootstrap_panel_component_1_1) {
                bootstrap_panel_component_1 = bootstrap_panel_component_1_1;
            },
            function (zippy_component_1_1) {
                zippy_component_1 = zippy_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.courses = ['Course 1', 'Course 2', 'Course 3'];
                    this.viewMode = 'map';
                    this.post = {
                        title: "Angular Tutorial for Beginners",
                        body: "\n            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.\n        "
                    };
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        pipes: [summary_pipe_1.SummaryPipe],
                        directives: [bootstrap_panel_component_1.BootstrapPanel, zippy_component_1.ZippyComponent],
                        template: "\n        <div *ngIf=\"courses.length > 0\">\n            List of Courses\n        </div>\n        <div *ngIf=\"courses.length == 0\">\n            You don't have any courses yet.\n        </div>\n\n        <hr/>\n\n\n        <ul class=\"nav nav-pills\">\n            <li [class.active]=\"viewMode == 'map'\"><a (click)=\"viewMode = 'map'\">Map View</a></li>\n            <li [class.active]=\"viewMode == 'list'\"><a (click)=\"viewMode = 'list'\">List View</a></li>\n        </ul>\n     \n\n        <div [ngSwitch]=\"viewMode\">\n            <template [ngSwitchWhen]=\"'map'\" ngSwitchDefault>Map View CONTENT</template>\n            <template [ngSwitchWhen]=\"'list'\">List View CONTENT</template>\n        </div>   \n\n        <hr />\n\n        <ul>\n            <li *ngFor=\"#course of courses, #i = index\">\n                {{i+1}}) {{course}}\n            </li>\n\n        </ul>\n        <hr />\n        {{post.title}}\n        <br />\n        {{post.body | summary:10}}\n\n        <hr />\n        <bs-panel>\n            <div class=\"heading\">Heading</div>\n            <div class=\"body\">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>\n        </bs-panel>\n\n        <hr />\n\n        <zippy title=\"Title1\">\n            Here is the content!\n        </zippy>\n        <zippy title=\"Title2\">\n            More and more content....\n        </zippy>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map