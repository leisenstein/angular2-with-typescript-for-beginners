import {Component} from 'angular2/core';
import {SignUpFormComponent} from './signup-form.component'
import { ChangePasswordFormComponent } from './change-password-form.component';
@Component({
    selector: 'my-app',
    directives: [SignUpFormComponent, ChangePasswordFormComponent],
    template: `
        <h1>Angular 2 - Section 7</h1>
        <signup-form></signup-form>
        <hr /><hr />
        <change-password-form></change-password-form>
    `
})
export class AppComponent {
}