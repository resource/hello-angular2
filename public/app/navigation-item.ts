import {Component} from 'angular2/core';

@Component({
    selector: 'nav-item',
    template: `<a class="nav-link">{{headerLink.title}}</a>`
})

export class NavigationItem {}
