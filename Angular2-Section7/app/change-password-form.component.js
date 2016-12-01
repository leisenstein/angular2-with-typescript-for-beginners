System.register(['angular2/core', 'angular2/common', './passwordValidators'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, passwordValidators_1;
    var ChangePasswordFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (passwordValidators_1_1) {
                passwordValidators_1 = passwordValidators_1_1;
            }],
        execute: function() {
            let ChangePasswordFormComponent = class ChangePasswordFormComponent {
                constructor(fb) {
                    this.form = fb.group({
                        currentpassword: [
                            '',
                            common_1.Validators.compose([common_1.Validators.required]),
                            null // async validators
                        ],
                        newpassword: [
                            '',
                            common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(5)]),
                            passwordValidators_1.PasswordValidators.mustMatchNewPassword // async validators
                        ],
                        confirmpassword: [
                            '',
                            common_1.Validators.compose([common_1.Validators.required]),
                            passwordValidators_1.PasswordValidators.mustMatchNewPassword] // async validators
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
            };
            ChangePasswordFormComponent = __decorate([
                core_1.Component({
                    selector: 'change-password-form',
                    templateUrl: 'app/change-password-form.component.html'
                }), 
                __metadata('design:paramtypes', [common_1.FormBuilder])
            ], ChangePasswordFormComponent);
            exports_1("ChangePasswordFormComponent", ChangePasswordFormComponent);
        }
    }
});
//# sourceMappingURL=change-password-form.component.js.map