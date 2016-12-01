import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';


import { NavbarComponent } from './shared/navbar/navbar.component';
import { UsersComponent } from './components/users/users.component';
import { UserFormComponent } from './components/users/user-form.component';
import { PostsComponent } from './components/posts/posts.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './shared/notfound/not-found.component';

@RouteConfig([
    { path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true},
    { path: '/users', name: 'Users', component: UsersComponent},
    { path: '/users/:id', name: 'EditUser', component: UserFormComponent },
    { path: '/users/new', name: 'NewUser', component: UserFormComponent},
    { path: '/posts', name: 'Posts', component: PostsComponent },
    { path: '/not-found', name: 'NotFound', component: NotFoundComponent},
    { path: '/*other', name: 'Other', redirectTo: ['Home']}
])
@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES, NavbarComponent, HomeComponent, UsersComponent, UserFormComponent, PostsComponent],
    template: `<h1>Angular 2 with TypeScript</h1>
    <navbar></navbar>
    <div class="container">
        <router-outlet></router-outlet>
    </div>  
    `
})
export class AppComponent { }