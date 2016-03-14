import {Component} from 'angular2/core';

import {HeaderComponent} from './header';
import {ContentComponent} from './content';
import {FooterComponent} from './footer';

@Component({
    selector: 'my-app',
    directives: [HeaderComponent, ContentComponent, FooterComponent],
    template: `
        <div>
            <app-header></app-header>
            <app-content></app-content>
            <app-footer></app-footer>
        </div>
    `
})

export class AppComponent {}