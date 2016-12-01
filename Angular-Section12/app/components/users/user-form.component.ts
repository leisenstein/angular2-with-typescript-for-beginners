import { Component, OnInit } from 'angular2/core';
import { ControlGroup, FormBuilder, Validators } from 'angular2/common';
import { BasicValidators } from '../../shared/validators/basicValidators';
import { Router, CanDeactivate, RouteParams } from 'angular2/router';
import { UserService } from '../../components/users/user.service';
import { Http, HTTP_PROVIDERS } from 'angular2/http';
import { User } from './user';

@Component({
    templateUrl: 'app/components/users/user-form.component.html',
    providers: [UserService, HTTP_PROVIDERS]
})
export class UserFormComponent implements OnInit, CanDeactivate{
    form: ControlGroup;
    // Form HTML can access dynamic title assigned in TS code behind
    title: string;

    // Blank user obj with Blank address obj inside. 
    // Populate this obj so none of th fields will throw NULL Reference Exceptions.
    user = new User();  



    constructor(fb: FormBuilder, private _router : Router, private _routeParams: RouteParams ,private _userService: UserService) {
        this.form = fb.group({
            name: ['', Validators.required],
            email: ['', Validators.compose([BasicValidators.email])],
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
            .subscribe(user=>{
                this.user = user  // all works
            }
            , response => {  // errors
                if(response.status = 404) {
                    this._router.navigate(['NotFound']);
                }
            });

    }


    routerCanDeactivate(next, previous) {
        if(this.form.dirty)
            return confirm("Are you sure?");

        return true;
    }

    save() {
        var id = this.user.id;
        var result;
        if(!id) {
            result = this._userService.addUser(this.form.value)
                        .subscribe(r => {
                            // Here, we should mark form as clean/pristine so dirty checking will not trigger
                            console.log("addUser ====> ", r);
                            // NOT SUPPORTED IN BETA, COULD CREATE A NEW FORM ... this.form.markAsPristine();
                            this._router.navigate(['Users']);
                        });
        } else {
            result = this._userService.updateUser(this.user)
                .subscribe(r => {
                    // Here, we should mark form as clean/pristine so dirty checking will not trigger
                    // NOT SUPPORTED IN BETA, COULD CREATE A NEW FORM ... this.form.markAsPristine();
                    this._router.navigate(['Users']);
                });
        }      
    }  // save()


    
}