import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';

@Component({
    selector: 'app-header',
    template: `
        <header>
            <nav class="navbar navbar-light bg-faded">
                <div class="nav navbar-nav">
                    <a class="navbar-brand" href="#">Brand</a>
                    <a href="#" *ngFor="#headerLink of headerLinks" (click)="navItemSelected(headerLink)" class="nav-item nav-link">
                        {{headerLink.title}}
                    </a>
                </div>
            </nav>
        </header>
    `
})

export class HeaderComponent implements OnInit {

    headerLinks = [{title:"One"}, {title:"Two"}, {title:"Three"}];

    navItemSelected(item) {
        console.log(`${item.title} was selected`);
    }

    ngOnInit() {
        console.log("init header component");
    }

}