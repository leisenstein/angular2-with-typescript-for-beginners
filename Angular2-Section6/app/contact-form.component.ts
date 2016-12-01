import {Component, Input} from 'angular2/core';

@Component({
    selector: 'contact-form',
    templateUrl: 'app/contact-form.component.html' 
})
export class ContactFormComponent {
    @Input() minLength : string;
    onSubmit(form) {
        console.log(form);
    }
}