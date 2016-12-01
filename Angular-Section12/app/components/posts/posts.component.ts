import { Component, OnInit } from 'angular2/core';
import { Http, HTTP_PROVIDERS } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import { PostService } from './post.service';
import { UserService } from '../users/user.service';
import { PaginationComponent } from '../../shared/pagination/pagination.component';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';
@Component({
    selector: 'posts',
    directives: [SpinnerComponent, PaginationComponent],
    template: `<h2>Posts</h2>
    <div class="form-group">
        <select #u (change)="reloadPosts({userId: u.value})" id="userSelect" class="form-control">
            <option value="-1">Select a user...</option>
            <option *ngFor="#user of users" value="{{user.id}}">{{user.name}}</option>
        </select>
    </div>
    <div class="form-group pagination">
        <pagination [items]="posts" (page-changed)="onPageChanged($event)" [page-size]="pageSize"></pagination>
    </div>
    <div class="row">
        <div class="col-md-6" >
            <spinner [visible]="postsLoading"></spinner>
            <ul class="list-group posts">
                <li *ngFor="#post of pagedPosts" class="list-group-item" (click)="select(post);" [class.active]="currentPost == post">{{post.title}}</li>
            </ul>
        </div>
        <div class="col-md-6" >
            <div *ngIf="currentPost" class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title">{{currentPost.title}}</h3>
              </div>
              <div class="panel-body">
                <p>{{currentPost.body}}</p>
                <hr />

                <div class="media" *ngFor="#comment of currentPost.comments">
                  <spinner [visible]="commentsLoading"></spinner>
                  <div class="media-left">
                    <a href="#">
                      <img class="media-object thumbnail" src="http://lorempixel.com/80/80/" alt="...">
                    </a>
                  </div>
                  <div class="media-body">
                    <h4 class="media-heading">{{comment.name}}</h4>
                    {{comment.body}}
                  </div>
                </div>

              </div>
            </div>
        </div>
    </div>
    `,
    providers: [HTTP_PROVIDERS, PostService, UserService]
})
export class PostsComponent implements OnInit{
    users = [];
    posts = [];
    postsLoading;
    commentsLoading;
    currentPost;
    pagedPosts = [];
    pageSize = 10;
  

    constructor(private _postService: PostService, private _userService: UserService) {  }

    ngOnInit() {
        this.loadUsers();
        this.loadPosts();
    }

    // load users for dropdownlist
    private loadUsers() {
        this._userService.getUsers()
            .subscribe(users => {
                this.users = users;
            }),
            null,
            () => { console.log("Done getting users for DDL!"); }
    }

    // load posts to variable, filter is optional
    private loadPosts(filter?) {
        console.log("loadPosts :: ", filter);
        this.postsLoading = true;
        this._postService.getPosts(filter)
            .subscribe(posts => {
                this.posts = posts;
                // this.pagedPosts = this.getPostsInPage(1);
                this.pagedPosts = _.take(this.posts, this.pageSize);
            },
            null,
            () => { this.postsLoading = false; });
    }

    // clear out comments and reload
    reloadPosts(filter) {
        console.log("reloadPosts:: ", filter);
        
        this.currentPost = null;
        this.loadPosts(filter);
    }

    // when individual post is clicked, load comments
    select(post) {
        if(post) {
            var postId = post.id;
            this.currentPost = post;
            this.commentsLoading = true;
            this._postService.getComments(postId)
                .subscribe(comments => {
                    this.currentPost.comments = comments;
                },
                null, // errors
                () => { 
                    this.commentsLoading = false;
                });
        } // end if
    } // end select

    



    onPageChanged(page) {
        //this.pagedPosts = this.getPostsInPage(page);

        var startIndex = (page - 1) * this.pageSize;
        this.pagedPosts = _.take(_.rest(this.posts, startIndex), this.pageSize);
    }

    // private getPostsInPage(page) {
    //     var result = [];
    //     var startingIndex = (page - 1) * this.pageSize;
    //     var endIndex = Math.min(startingIndex + this.pageSize, this.posts.length);

    //     for (var i = startingIndex; i < endIndex; i++)
    //         result.push(this.posts[i]);

    //     return result;

    // }
}