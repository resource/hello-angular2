import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {ProjectsService} from '../services/projects.service';
import {Project} from "../models/project";

@Component({
    providers: [ProjectsService],
    template:`
        <div *ngIf="project">
            <h3>{{project.name}}</h3>
            <p>{{project.description}}</p>
            <div id="{{image.id}}" *ngFor="#image of project.images" class="">
                <figure class="figure-img">
                    <img width="100" height="100" src="{{image.source}}" />
                    <figcaption class="figure-caption">{{image.caption}}</figcaption>
                </figure>
            </div>
        </div>
    `
})

export class ProjectDetailComponent implements OnInit
{

    project:Project;

    constructor(private _projectService: ProjectsService, private _routeParams: RouteParams) {}

    ngOnInit()
    {
        let id = this._routeParams.get('id');
        this._projectService.getProjectById(id).then(project => this.project = project);
    }
}