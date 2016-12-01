import {Component} from 'angular2/core';
import {ControlGroup, Control, Validators, FormBuilder} from 'angular2/common';
import {UsernameValidators} from './usernameValidators';

@Component({
    selector: 'signup-form',
    templateUrl: 'app/signup-form.component.html'
})
export class SignUpFormComponent {

    // ControlGroup method
    // form = new ControlGroup({
    //     username: new Control('', Validators.required),
    //     password: new Control('', Validators.required)
    // });


    // FormBuilder method
    form: ControlGroup;

    constructor(fb : FormBuilder) {
        this.form = fb.group({
            username: ['', // default 
                       Validators.compose([Validators.required,UsernameValidators.cannotContainSpace]), // sync validators
                       UsernameValidators.shouldBeUnique]  // async validators
            ,password:['', Validators.required]
        });
    }

    signup() {
        // var result = authService.login(this.form.value);

        this.form.find('username').setErrors({
            invalidLogin: true
        });



        console.log(this.form.value);

    }
}