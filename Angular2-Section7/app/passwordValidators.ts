import { Control } from 'angular2/common';
export class PasswordValidators {
    static mustMatchNewPassword(control: Control) {
        // async returns a PROMISE
        return new Promise((resolve, reject) => {
            // simulate server call
            setTimeout(function() {
                if (control.value != "12345")
                    resolve({ confirmPasswordInvalid: true });
                else
                    resolve(null);
            }, 500);
        });
    }
}