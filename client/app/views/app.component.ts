import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {ProjectsComponent} from './projects.component';
import {AboutComponent} from './about.component';
import {ProjectDetailComponent} from './project-detail.component'

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    template: `
        <div class="container-fluid">
            <nav class="navbar navbar-light bg-faded">
                <div class="navbar-brand"><img src="/images/logo.png" alt="logo" width="44" height="44"></div>
                <ul class="nav navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" [routerLink]="['Projects']">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" [routerLink]="['About']">About</a>
                    </li>
                </ul>
            </nav>
            <router-outlet></router-outlet>
        </div>
    `
})

@RouteConfig([
    { path: '/', redirectTo: ['Projects'] },
    { path: '/projects', name: 'Projects', component: ProjectsComponent },
    { path: '/project/:id', name: 'ProjectDetail', component: ProjectDetailComponent },
    { path: '/about', name: 'About', component: AboutComponent }
])

export class AppComponent {}