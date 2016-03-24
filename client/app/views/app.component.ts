import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {AboutComponent} from './about.component';
import {DisclaimerComponent} from './disclaimer.component';
import {Logger} from '../services/logger';
import {ActorsComponent} from "./actors.component";
import {ActorDetailComponent} from "./actor-detail.component";


@Component({
    selector: 'actors-app',
    directives: [ROUTER_DIRECTIVES],
    template: `
        <div class="container-fluid">
            <nav class="navbar navbar-static-top navbar-light bg-faded">
                <a class="navbar-brand" [routerLink]="['Actors']">BAIH</a>
                 <ul class="nav navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" [routerLink]="['Actors']">Actors</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" [routerLink]="['About']">About</a>
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
    { path: '/', redirectTo: ['Actors']},
    { path: '/actors', name: 'Actors', component: ActorsComponent },
    { path: '/actor/:id', name: 'ActorDetail', component: ActorDetailComponent },
    { path: '/about', name: 'About', component: AboutComponent },
    { path: '/disclaimer', name: 'Disclaimer', component: DisclaimerComponent }
])

export class AppComponent
{
    constructor()
    {
        Logger.log('AppComponent constructed');
    }
}