import { Component, Injectable } from 'angular2/core';
import { Http, HTTP_PROVIDERS } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class PostService {
    private _baseUrl = "https://jsonplaceholder.typicode.com/posts";


    constructor(private _http: Http) {}
    private getPostUrl(postId) {
        return this._baseUrl + "/" + postId;
    }
    private getCommentsUrl(postId) {
        return this._baseUrl + "/" + postId + "/comments";
    }

    getPosts(filter?) {
        var url = this._baseUrl;

        if (filter && filter.userId && filter.userId > 0)
            url += '?userId=' + filter.userId;

        var posts = this._http.get(url)
            .map(res => res.json());
        return posts;
    }

   

    getPost(postId) {
        var post = this._http.get(this.getPostUrl(postId))
            .map(res => res.json());
        return post;
    }

    getComments(postId) {
        var comments = this._http.get(this.getCommentsUrl(postId))
            .map(res => res.json());
        return comments;
    }
}