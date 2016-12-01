System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var UserService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            let UserService = class UserService {
                constructor(_http) {
                    this._http = _http;
                    this._baseUrl = "https://jsonplaceholder.typicode.com/users";
                }
                getUsers() {
                    var users = this._http.get(this._baseUrl)
                        .map(res => res.json());
                    return users;
                }
                getUser(userId) {
                    var user = this._http.get(this.getUserUrl(userId))
                        .map(res => res.json());
                    return user;
                }
                addUser(user) {
                    // let headers = new Headers({ 'Content-Type': 'application/json' });
                    // let options = new RequestOptions({ headers: headers});
                    var res = this._http.post(this._baseUrl, JSON.stringify(user))
                        .map(res => res.json());
                    console.log('RESPONSE FROM JSONAPI ===> ', res);
                    return res;
                }
                updateUser(user) {
                    console.log("user VALUE: ", user);
                    var res = this._http.put(this.getUserUrl(user.id), JSON.stringify(user))
                        .map(res => res.json());
                    return res;
                }
                deleteUser(id) {
                    console.log("DELETE USER: ", id);
                    var res = this._http.delete(this.getUserUrl(id))
                        .map(res => res.json());
                    return res;
                }
                getUserUrl(userId) {
                    return this._baseUrl + "/" + userId;
                }
            };
            UserService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [http_1.Http])
            ], UserService);
            exports_1("UserService", UserService);
        }
    }
});
//# sourceMappingURL=user.service.js.map