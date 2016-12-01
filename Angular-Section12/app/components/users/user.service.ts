import { Injectable } from 'angular2/core';
import { Http, HTTP_PROVIDERS } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import { Component } from 'angular2/core';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
    private _baseUrl = "https://jsonplaceholder.typicode.com/users";
    constructor(private _http: Http) {}

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


    private getUserUrl(userId) {
        return this._baseUrl + "/" + userId;
    }

}