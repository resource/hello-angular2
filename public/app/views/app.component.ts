import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HomeComponent} from './home.component';
import {ProjectsComponent} from './projects.component';
import {AboutComponent} from './about.component';

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    template: `
        <nav class="navbar navbar-light bg-faded">
            <div class="nav navbar-nav">
                <a [routerLink]="['Home']" class="navbar-brand">Home</a>
                <a [routerLink]="['Projects']" class="nav-item nav-link">Projects</a>
                <a [routerLink]="['About']" class="nav-item nav-link">About</a>
            </div>
        </nav>
        <router-outlet></router-outlet>
    `
})

@RouteConfig([
    { path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/projects', name: 'Projects', component: ProjectsComponent },
    { path: '/about', name: 'About', component: AboutComponent }
])

export class AppComponent
{

}