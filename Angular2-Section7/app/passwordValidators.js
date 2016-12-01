System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PasswordValidators;
    return {
        setters:[],
        execute: function() {
            class PasswordValidators {
                static mustMatchNewPassword(control) {
                    // async returns a PROMISE
                    return new Promise((resolve, reject) => {
                        // simulate server call
                        setTimeout(function () {
                            if (control.value != "12345")
                                resolve({ confirmPasswordInvalid: true });
                            else
                                resolve(null);
                        }, 500);
                    });
                }
            }
            exports_1("PasswordValidators", PasswordValidators);
        }
    }
});
//# sourceMappingURL=passwordValidators.js.map