import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

@Component({
    directives: [RouterOutlet],
    template:`
        <div class="about">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ipsum ante, ornare eu congue ut, congue at lacus. Nam sapien sapien, suscipit nec lacus vel, vestibulum pulvinar risus. Vestibulum molestie lectus sed odio bibendum, ullamcorper imperdiet libero lobortis. Vivamus vitae ornare lacus. Sed lobortis nibh ut mattis vulputate. Nunc facilisis est eu lectus dictum consectetur. Duis finibus rutrum fermentum. Praesent sagittis ante augue, tincidunt bibendum nulla posuere nec. Nulla id libero at arcu fringilla pretium.</p>
            <p>Quisque in arcu ut libero laoreet pellentesque et tincidunt mi. Cras imperdiet convallis dapibus. Etiam tristique pretium augue quis commodo. Cras ut tellus est. Phasellus a feugiat nisl. Cras vel ultricies mauris. Phasellus ultricies, quam hendrerit varius dignissim, mi nulla consectetur lectus, in feugiat nisi orci sit amet est. Nulla vestibulum iaculis erat, in luctus justo sollicitudin vel. Maecenas est enim, convallis eget ultrices vitae, placerat vitae nisl. Sed vel egestas ante, at vehicula justo. Aliquam feugiat sodales nibh, et maximus magna. Ut vitae efficitur mi. Duis sit amet tellus mi. Integer urna libero, pellentesque quis sapien sed, vestibulum hendrerit metus.</p>
        </div>
    `
})

export class AboutComponent {}