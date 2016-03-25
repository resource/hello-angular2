import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {ItemsComponent} from "./items.component";
import {ItemDetailComponent} from "./item-detail.component";


@Component({
    selector: 'app',
    directives: [ROUTER_DIRECTIVES],
    template: `
        <div class="container-fluid">
            <nav class="navbar navbar-static-top">
                <a class="navbar-brand" [routerLink]="['Items']">Brand</a>
                 <ul class="nav navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" [routerLink]="['Items']">Items</a>
                    </li>
                </ul>
            </nav>
            <div class="content">
                <router-outlet></router-outlet>
            </div>
        </div>
    `
})

@RouteConfig([
    { path: '/', redirectTo: ['Items']},
    { path: '/items', name: 'Items', component: ItemsComponent },
    { path: '/item/:id', name: 'ItemDetail', component: ItemDetailComponent },
])

export class AppComponent
{
    constructor(){}
}