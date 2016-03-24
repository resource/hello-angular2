import {Component, Input} from "angular2/core";
import {ActorImage} from "../models/actor-image";

@Component({
    selector:'carousel',
    template:`

        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
            
            <div class="carousel-inner" role="listbox">
                <img data-src="{{images[0].source}}" active />
                <div *ngFor="#image of images" class="carousel-item">
                    <img data-src="{{image.source}}"/>
                </div>
            </div>
            
            <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                <span class="icon-prev" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            
            <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                <span class="icon-next" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            
        </div>
        
    `
})

export class CarouselComponent
{

    @Input('images') images:ActorImage[];

    constructor()//images:ActorImage[])
    {
        // this.images = images;
    }

}

