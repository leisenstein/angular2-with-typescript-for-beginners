import { Control } from 'angular2/common';
export class UsernameValidators {
    
    static shouldBeUnique(control: Control) {
        // async returns a PROMISE
        return new Promise((resolve, reject) => {
            // simulate server call
            setTimeout(function() {
                if (control.value == "mosh")
                    resolve({ shouldBeUnique: true});
                else
                    resolve(null);
            }, 2000);
        });
    }

    static cannotContainSpace(control: Control) {
        if(control.value.indexOf(' ') >= 0) {
            // not pass { validationRule: value}
            return { cannotContainSpace: true }
        }
        // pass, return null
        return null;
    }
}