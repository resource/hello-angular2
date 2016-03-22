import {Component, OnInit} from 'angular2/core';
import {RouterOutlet, Router} from 'angular2/router';
import {ProjectsService} from '../services/projects.service';
import {Project} from "../models/project";
import {HTTP_PROVIDERS} from "angular2/http";

@Component({
    directives: [RouterOutlet],
    providers: [ProjectsService, HTTP_PROVIDERS],
    template: `
        <div class="projects">
            <ul>
                <li id="{{project.id}}" *ngFor="#project of projects">
                    <h4>{{project.name.toUpperCase()}}</h4>
                    <p>{{shortDescriptionForProject(project)}}</p>
                    <div class="max-width-1 mx-auto"><img width="100%" height="100%" src="{{project.poster}}"/></div>
                    <a (click)="gotoDetail(project)" type="button" class="btn btn-info-outline">Learn More</a>
                </li>
            </ul>
        </div>
    `
})

export class ProjectsComponent implements OnInit
{


    projects:Project[]

    constructor(private _projectsService: ProjectsService, private _router: Router) {}

    ngOnInit()
    {
        this._projectsService.getProjects().then(projects => this.projects = projects)
    }

    shortDescriptionForProject(project)
    {
        return `${project.description.slice(0,100)}...`
    }

    gotoDetail(project: Project) {
        let link = ['ProjectDetail', { id: project.id }];
        this._router.navigate(link);
    }

}