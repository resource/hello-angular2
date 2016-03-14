import {Component} from 'angular2/core';

@Component({
    selector: 'app-header',
    template: `
        <header>
            <nav class="nav nav-inline">
                <a href="#" *ngFor="#headerLink of headerLinks" class="nav-link">{{headerLink.title}}</a>
            </nav>
        </header>
    `
})

export class HeaderComponent {
    headerLinks = [{title:"One"}, {title:"Two"}, {title:"Three"}];
}