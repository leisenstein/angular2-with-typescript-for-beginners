import {Component} from 'angular2/core';
import {SummaryPipe} from './summary.pipe';
import {BootstrapPanel} from './bootstrap.panel.component';
import {ZippyComponent} from './zippy.component';

@Component({
    selector: 'my-app',
    pipes: [SummaryPipe],
    directives: [BootstrapPanel, ZippyComponent],
    template: `
        <div *ngIf="courses.length > 0">
            List of Courses
        </div>
        <div *ngIf="courses.length == 0">
            You don't have any courses yet.
        </div>

        <hr/>


        <ul class="nav nav-pills">
            <li [class.active]="viewMode == 'map'"><a (click)="viewMode = 'map'">Map View</a></li>
            <li [class.active]="viewMode == 'list'"><a (click)="viewMode = 'list'">List View</a></li>
        </ul>
     

        <div [ngSwitch]="viewMode">
            <template [ngSwitchWhen]="'map'" ngSwitchDefault>Map View CONTENT</template>
            <template [ngSwitchWhen]="'list'">List View CONTENT</template>
        </div>   

        <hr />

        <ul>
            <li *ngFor="#course of courses, #i = index">
                {{i+1}}) {{course}}
            </li>

        </ul>
        <hr />
        {{post.title}}
        <br />
        {{post.body | summary:10}}

        <hr />
        <bs-panel>
            <div class="heading">Heading</div>
            <div class="body">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
        </bs-panel>

        <hr />

        <zippy title="Title1">
            Here is the content!
        </zippy>
        <zippy title="Title2">
            More and more content....
        </zippy>
    `
})
export class AppComponent {
    courses = ['Course 1', 'Course 2', 'Course 3'];
    viewMode = 'map';
    post = {
        title: "Angular Tutorial for Beginners",
        body: `
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        `
    }
}