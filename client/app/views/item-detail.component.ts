import {Component, OnInit} from 'angular2/core';
import {RouteParams, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';
import {HTTP_PROVIDERS} from "angular2/http";
import {Item} from "../models/items";
import {ItemsService} from "../services/items.service";

@Component({
    directives: [RouterOutlet, ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS, ItemsService],
    template:`
        <div *ngIf="item" class="item-detail">
            <h3>{{item.name}}</h3>
            <img src="{{item.poster}}" class="img-fluid" alt="Responsive image"/>
            <p>{{item.longDescription}}</p>
        </div>
    `
})

export class ItemDetailComponent implements OnInit
{

    aid:string;
    item:Item;
    error:any;

    constructor(private _service: ItemsService, private _routeParams: RouteParams)
    {
        this.aid = _routeParams.get('id');
    }

    ngOnInit()
    {
        this._service.getItemById(this.aid).subscribe(aid => {
            this.item = aid;
        }, (error) => {
            this.error = error;
        });
    }
}