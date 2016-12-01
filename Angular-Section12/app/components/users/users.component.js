System.register(['angular2/core', 'angular2/http', 'angular2/router', './user.service'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, user_service_1;
    var UsersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            let UsersComponent = class UsersComponent {
                constructor(_userService) {
                    this._userService = _userService;
                }
                ngOnInit() {
                    this._userService.getUsers()
                        .subscribe(u => {
                        this.users = u;
                    });
                }
                deleteUser(user) {
                    if (confirm("Are you sure you want to delete user: " + user.name + "?")) {
                        var index = this.users.indexOf(user);
                        this.users.splice(index, 1); // remove the user from the array
                        // Now, call deleteUser service.  If error, put it back.  Otherwise, all is good
                        this._userService.deleteUser(user.id)
                            .subscribe(null, err => {
                            alert("Could not delete user.");
                            this.users.splice(index, 0, user);
                        });
                    }
                }
            };
            UsersComponent = __decorate([
                core_1.Component({
                    selector: 'users',
                    template: `<h2>Users</h2>
    <p>
        <a [routerLink]="['NewUser']" class="btn btn-primary">Add User</a>
    </p>
    <table class="table table-bordered">
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
        </tr>

        <tr *ngFor="#user of users">
            <td>{{user.name}}</td>
            <td>{{user.email}}</td>
            <td><a [routerLink]="['EditUser', {id: user.id}]"><i class="fa fa-edit"></i></a></td>
            <td><i (click)="deleteUser(user)" class="fa fa-remove clickable"></i></td>
        </tr>
    </table>
    `,
                    providers: [http_1.HTTP_PROVIDERS, user_service_1.UserService],
                    directives: [router_1.RouterLink]
                }), 
                __metadata('design:paramtypes', [user_service_1.UserService])
            ], UsersComponent);
            exports_1("UsersComponent", UsersComponent);
        }
    }
});
//# sourceMappingURL=users.component.js.map