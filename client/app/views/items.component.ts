import {Component, OnInit} from 'angular2/core';
import {RouterOutlet, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {HTTP_PROVIDERS} from "angular2/http";
import {Item} from "../models/items";
import {ItemsService} from "../services/items.service";

@Component({
    directives: [RouterOutlet, ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS, ItemsService],
    template: `       
        <div class="items">
            <div class="card-deck">
                <div id="{{item.id}}" class="card" *ngFor="#item of items">     
                    <img class="card-img-top" width="100%" src="{{item.poster}}" alt="Card image cap">
                    <div class="card-block">
                        <h4 class="card-title">{{item.name}}</h4>
                        <p class="card-text">{{item.shortDescription}}</p>
                        <a (click)="gotoDetail(item)" class="btn btn-info-outline">See More</a>
                    </div>
                </div>
            </div>
        </div>
    `
})

export class ItemsComponent implements OnInit
{

    items:Item[];
    error:any;

    constructor(private _service: ItemsService, private _router: Router) {}

    ngOnInit()
    {
        this.getItems();
    }

    getItems()
    {
        this._service.getItems().subscribe(items => {
            this.items = items;
        }, (error) => {
            this.error = error;
        });
    }

    gotoDetail(actor: Item)
    {
        let link = ['ItemDetail', { id: actor.id }];
        this._router.navigate(link);
    }

}