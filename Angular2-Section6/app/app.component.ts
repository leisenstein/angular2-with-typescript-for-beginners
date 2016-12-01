import {Component} from 'angular2/core';
import {ContactFormComponent} from './contact-form.component';
import {SubscriptionFormComponent} from './subscription-form.component';

@Component({
    selector: 'my-app',
    directives: [ContactFormComponent, SubscriptionFormComponent],
    template: `<h1>Section 6 - Angular 2 App</h1>
        <contact-form></contact-form>
        <hr />
        <subscription-form></subscription-form>
    `
})
export class AppComponent { 


}