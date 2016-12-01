System.register(['angular2/core', './post.service', './github.service', 'rxjs/Observable', 'rxjs/add/observable/forkJoin', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, post_service_1, github_service_1, Observable_1, http_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            },
            function (github_service_1_1) {
                github_service_1 = github_service_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_postService, _gitHubService) {
                    this._postService = _postService;
                    this._gitHubService = _gitHubService;
                    this.isLoading = true;
                    this.username = "octocat";
                    this.user = {};
                    this.followers = [];
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._postService.getPosts()
                        .subscribe(function (posts) {
                        _this.isLoading = false;
                        console.log(posts[0].id);
                    });
                    Observable_1.Observable.forkJoin(this._gitHubService.getUser(this.username), this._gitHubService.getFollowers(this.username))
                        .subscribe(function (res) {
                        _this.user = res[0];
                        _this.followers = res[1];
                    }, null, function () { _this.isLoading = false; });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        styles: ["\n        .avatar {\n            width: 100;\n            height: 100;\n            border-radius: 100%;\n        }\n\n    "],
                        template: "\n    <i *ngIf=\"isLoading\" class=\"fa fa-spinner fa-spin fa-3x\"></i>\n    <h2>@{{user.login}}</h2>\n    <img class=\"avatar\" src=\"{{user.avatar_url}}\">\n\n    <h3>Followers</h3>\n    <div *ngFor=\"#follower of followers\" class=\"media\">\n        <div class=\"media-left\">\n            <a href=\"#\">\n                <img src=\"{{follower.avatar_url}}\" alt=\"\" class=\"media-object avatar\" />\n            </a>\n        </div>\n        <div class=\"media-body\">\n            <h4 class=\"media-heading\">{{follower.login}}</h4>\n        </div>\n    </div>\n    ",
                        providers: [post_service_1.PostService, http_1.HTTP_PROVIDERS, github_service_1.GitHubService]
                    }), 
                    __metadata('design:paramtypes', [post_service_1.PostService, github_service_1.GitHubService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map