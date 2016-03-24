import {Component, OnInit} from 'angular2/core';
import {RouteParams, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';
import {HTTP_PROVIDERS} from "angular2/http";
import {Logger} from "../services/logger";
import {ActorsService} from "../services/actors.service";
import {Actor} from "../models/actor";

@Component({
    directives: [RouterOutlet, ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS, ActorsService],
    template:`
        <div *ngIf="actor" class="actor-detail">
            <h3>{{actor.name}}</h3>
            <img src="{{actor.images[1].source}}" alt=""/>
            <p *ngFor="#paragraph of descriptionParagraphs">{{paragraph}}</p>
        </div>
    `
})

export class ActorDetailComponent implements OnInit
{

    aid:string;
    actor:Actor;
    error:any;
    descriptionParagraphs:string[];

    constructor(private _service: ActorsService, private _routeParams: RouteParams)
    {
        Logger.log(`constructed`);
        this.aid = _routeParams.get('id');
    }

    ngOnInit()
    {

        Logger.log(`route param id = ${this.aid}`);
        this._service.getActorById(this.aid).subscribe(aid => {
            Logger.log(this.aid);
            this.actor = aid;
            this.descriptionParagraphs = this.actor.description.split('\r');
        }, (error) => {
            Logger.error(this.error);
            this.error = error;
        });
    }
}