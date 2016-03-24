import {Component, OnInit} from 'angular2/core';
import {RouterOutlet, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {HTTP_PROVIDERS} from "angular2/http";
import {Actor} from "../models/actor";
import {ActorsService} from "../services/actors.service";

@Component({
    directives: [RouterOutlet, ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS, ActorsService],
    template: `
        
        <div class="navbar navbar-fixed-bottom">
            <div class="bg-info p-a-1 m-y-1" [hidden]="alertHidden">
                <button  type="button" class="close color-white" aria-label="Close" (click)="hideAlert()">
                    <span aria-hidden="true">&times;</span>
                </button>
                This website uses cookies to ensure you get the best experience on our website. <a class="link" [routerLink]="['Disclaimer']">More info</a>
            </div>
        </div>
        
        <div class="actors">
            <div class="card-deck">
                <div id="{{actor.id}}" class="card" *ngFor="#actor of actors">     
                    <img class="card-img-top" width="100%" height="100%" src="{{actor.poster}}" alt="Card image cap">
                    <div class="card-block">
                        <h4 class="card-title">{{actor.name}}</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a (click)="gotoDetail(actor)" class="btn btn-info-outline">See More</a>
                    </div>
                </div>
            </div>
        </div>
    `
})

export class ActorsComponent implements OnInit
{

    actors:Actor[];
    error:any;
    alertHidden:boolean;

    constructor(private _service: ActorsService, private _router: Router)
    {
        this.alertHidden = true;
    }

    ngOnInit()
    {
        this.getProjects();
    }

    hideAlert()
    {
        this.alertHidden = true;
    }

    getProjects()
    {


        this._service.getActors().subscribe(actors => {
            this.actors = actors;
            console.log(this.actors);
        }, (error) => {
            this.error = error;
            console.log(this.error);
        });
    }

    gotoDetail(actor: Actor)
    {
        let link = ['ActorDetail', { id: actor.id }];
        this._router.navigate(link);
    }

}