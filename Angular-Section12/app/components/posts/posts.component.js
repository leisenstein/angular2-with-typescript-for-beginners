System.register(['angular2/core', 'angular2/http', './post.service', '../users/user.service', '../../shared/pagination/pagination.component', '../../shared/spinner/spinner.component'], function(exports_1, context_1) {
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
    var core_1, http_1, post_service_1, user_service_1, pagination_component_1, spinner_component_1;
    var PostsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (pagination_component_1_1) {
                pagination_component_1 = pagination_component_1_1;
            },
            function (spinner_component_1_1) {
                spinner_component_1 = spinner_component_1_1;
            }],
        execute: function() {
            let PostsComponent = class PostsComponent {
                constructor(_postService, _userService) {
                    this._postService = _postService;
                    this._userService = _userService;
                    this.users = [];
                    this.posts = [];
                    this.pagedPosts = [];
                    this.pageSize = 10;
                }
                ngOnInit() {
                    this.loadUsers();
                    this.loadPosts();
                }
                // load users for dropdownlist
                loadUsers() {
                    this._userService.getUsers()
                        .subscribe(users => {
                        this.users = users;
                    }),
                        null,
                            () => { console.log("Done getting users for DDL!"); };
                }
                // load posts to variable, filter is optional
                loadPosts(filter) {
                    console.log("loadPosts :: ", filter);
                    this.postsLoading = true;
                    this._postService.getPosts(filter)
                        .subscribe(posts => {
                        this.posts = posts;
                        // this.pagedPosts = this.getPostsInPage(1);
                        this.pagedPosts = _.take(this.posts, this.pageSize);
                    }, null, () => { this.postsLoading = false; });
                }
                // clear out comments and reload
                reloadPosts(filter) {
                    console.log("reloadPosts:: ", filter);
                    this.currentPost = null;
                    this.loadPosts(filter);
                }
                // when individual post is clicked, load comments
                select(post) {
                    if (post) {
                        var postId = post.id;
                        this.currentPost = post;
                        this.commentsLoading = true;
                        this._postService.getComments(postId)
                            .subscribe(comments => {
                            this.currentPost.comments = comments;
                        }, null, // errors
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
            };
            PostsComponent = __decorate([
                core_1.Component({
                    selector: 'posts',
                    directives: [spinner_component_1.SpinnerComponent, pagination_component_1.PaginationComponent],
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
                    providers: [http_1.HTTP_PROVIDERS, post_service_1.PostService, user_service_1.UserService]
                }), 
                __metadata('design:paramtypes', [post_service_1.PostService, user_service_1.UserService])
            ], PostsComponent);
            exports_1("PostsComponent", PostsComponent);
        }
    }
});
//# sourceMappingURL=posts.component.js.map