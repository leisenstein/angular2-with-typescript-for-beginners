System.register(['angular2/core', 'angular2/common', '../../shared/validators/basicValidators', 'angular2/router', '../../components/users/user.service', 'angular2/http', './user'], function(exports_1, context_1) {
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
    var core_1, common_1, basicValidators_1, router_1, user_service_1, http_1, user_1;
    var UserFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (basicValidators_1_1) {
                basicValidators_1 = basicValidators_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            }],
        execute: function() {
            let UserFormComponent = class UserFormComponent {
                constructor(fb, _router, _routeParams, _userService) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._userService = _userService;
                    // Blank user obj with Blank address obj inside. 
                    // Populate this obj so none of th fields will throw NULL Reference Exceptions.
                    this.user = new user_1.User();
                    this.form = fb.group({
                        name: ['', common_1.Validators.required],
                        email: ['', common_1.Validators.compose([basicValidators_1.BasicValidators.email])],
                        phone: [],
                        address: fb.group({
                            street: [],
                            suite: [],
                            city: [],
                            zipcode: []
                        })
                    });
                }
                ngOnInit() {
                    var id = this._routeParams.get("id");
                    this.title = id ? "Edit User" : "New User";
                    // No id means NewUser
                    if (!id)
                        return;
                    this._userService.getUser(id)
                        .subscribe(user => {
                        this.user = user; // all works
                    }, response => {
                        if (response.status = 404) {
                            this._router.navigate(['NotFound']);
                        }
                    });
                }
                routerCanDeactivate(next, previous) {
                    if (this.form.dirty)
                        return confirm("Are you sure?");
                    return true;
                }
                save() {
                    var id = this.user.id;
                    var result;
                    if (!id) {
                        result = this._userService.addUser(this.form.value)
                            .subscribe(r => {
                            // Here, we should mark form as clean/pristine so dirty checking will not trigger
                            console.log("addUser ====> ", r);
                            // NOT SUPPORTED IN BETA, COULD CREATE A NEW FORM ... this.form.markAsPristine();
                            this._router.navigate(['Users']);
                        });
                    }
                    else {
                        result = this._userService.updateUser(this.user)
                            .subscribe(r => {
                            // Here, we should mark form as clean/pristine so dirty checking will not trigger
                            // NOT SUPPORTED IN BETA, COULD CREATE A NEW FORM ... this.form.markAsPristine();
                            this._router.navigate(['Users']);
                        });
                    }
                } // save()
            };
            UserFormComponent = __decorate([
                core_1.Component({
                    templateUrl: 'app/components/users/user-form.component.html',
                    providers: [user_service_1.UserService, http_1.HTTP_PROVIDERS]
                }), 
                __metadata('design:paramtypes', [common_1.FormBuilder, router_1.Router, router_1.RouteParams, user_service_1.UserService])
            ], UserFormComponent);
            exports_1("UserFormComponent", UserFormComponent);
        }
    }
});
//# sourceMappingURL=user-form.component.js.map