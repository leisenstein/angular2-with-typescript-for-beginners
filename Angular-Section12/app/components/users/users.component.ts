import { Component, OnInit } from 'angular2/core';
import { Observable } from 'rxjs/Observable';
import { HTTP_PROVIDERS } from 'angular2/http';
import { RouterLink } from 'angular2/router';
import { UserService } from './user.service';


@Component({
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
    providers: [HTTP_PROVIDERS, UserService],
    directives: [RouterLink]
})
export class UsersComponent implements OnInit {
    users: any[];
    constructor(private _userService : UserService) {

    }
    ngOnInit() {
        this._userService.getUsers()
            .subscribe(u => {
                this.users = u;
            });
    }

    deleteUser(user) {
        if(confirm("Are you sure you want to delete user: " + user.name + "?")) {
            var index = this.users.indexOf(user);
            this.users.splice(index, 1);  // remove the user from the array


            // Now, call deleteUser service.  If error, put it back.  Otherwise, all is good
            this._userService.deleteUser(user.id)
                .subscribe(null,
                        err => {
                            alert("Could not delete user.");
                            this.users.splice(index, 0, user);
                        });
        }
    }
}