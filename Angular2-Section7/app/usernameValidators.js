System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var UsernameValidators;
    return {
        setters:[],
        execute: function() {
            class UsernameValidators {
                static shouldBeUnique(control) {
                    // async returns a PROMISE
                    return new Promise((resolve, reject) => {
                        // simulate server call
                        setTimeout(function () {
                            if (control.value == "mosh")
                                resolve({ shouldBeUnique: true });
                            else
                                resolve(null);
                        }, 2000);
                    });
                }
                static cannotContainSpace(control) {
                    if (control.value.indexOf(' ') >= 0) {
                        // not pass { validationRule: value}
                        return { cannotContainSpace: true };
                    }
                    // pass, return null
                    return null;
                }
            }
            exports_1("UsernameValidators", UsernameValidators);
        }
    }
});
//# sourceMappingURL=usernameValidators.js.map