import {Component, OnInit} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';
import {ProjectsService} from '../services/projects.service';

@Component({
    directives: [RouterOutlet],
    providers: [ProjectsService],
    template: `
        <div>
            <ul class="list-group">
                <li id="{{project.id}}" *ngFor="#project of projects" class="list-group-item col-md-4">
                    <h4 class="list-group-item-heading">{{project.name}}</h4>
                    <p class="list-group-item-text">{{project.description}}</p>
                    <img src="{{project.poster}}" class="img-fluid center-block"/>
                </li>
            </ul>
        </div>
    `,
    styles:[]
})

export class ProjectsComponent
{

    projects = []

    constructor(private _projectsService: ProjectsService)
    {
        this.projects = this._projectsService.getProjects()
    }
}