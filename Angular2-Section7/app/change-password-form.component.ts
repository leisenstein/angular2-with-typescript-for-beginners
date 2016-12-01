import { Component } from 'angular2/core';
import { Control, ControlGroup, Validators, FormBuilder} from 'angular2/common';
import { PasswordValidators } from './passwordValidators';
@Component({
    selector: 'change-password-form',
    templateUrl: 'app/change-password-form.component.html'
})
export class ChangePasswordFormComponent {
    // console.log(this.form.value);
    form: ControlGroup;
    constructor(fb: FormBuilder) {
        this.form = fb.group({
            currentpassword: [
                '', // default
                Validators.compose([Validators.required]), // sync validators
                null // async validators
            ],
            newpassword: [
                '', // default
                Validators.compose([Validators.required, Validators.minLength(5)]), // sync validators
                PasswordValidators.mustMatchNewPassword // async validators
            ],
            confirmpassword: [
                '', // default
                Validators.compose([Validators.required]), // sync validators
                PasswordValidators.mustMatchNewPassword ] // async validators
        });
    }

    changePassword() {
        var txtConfirmPassword = this.form.find('confirmpassword');
        //console.log(txtConfirmPassword);

        if (txtConfirmPassword.value != '12345')
            this.form.find('confirmpassword').setErrors({
                confirmPasswordInvalid: true
            });
        else
            alert('Passwork is OK!');
        console.log(this.form.value);
    }
}