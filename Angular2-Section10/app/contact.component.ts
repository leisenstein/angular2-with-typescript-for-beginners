import {Component} from 'angular2/core';
import { Router, CanDeactivate } from 'angular2/router';

@Component({
    templateUrl: '/app/contact.component.html'
})
export class ContactComponent implements CanDeactivate {

    constructor(private _router: Router) {

    }

    routerCanDeactivate(next, prev) {
        // if(this.form.dirty)
        // must build form with formbuilder to have access to form object

        return confirm("Are you sure?");
    }
    onSubmit(form){
        console.log(form);
        this._router.navigate(['Albums']);
    }
}