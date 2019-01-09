/**
 * Core angular modules
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { TcJwtService } from 'tc-angular-services';

/**
 * The app component is used to hold lazily loaded module from ./modules directory.
 * This component is only to render and test ./modules/template-project.module, this component will not be exported
 */
@Component({
    selector: 'template-project-root',
    templateUrl: './app.component.html',
    styleUrls: [
        '../../node_modules/tc-styles/dist/scss/main.scss'
    ],
    encapsulation: ViewEncapsulation.None
})

/**
 * Root application root component
 */
export class AppComponent {
    constructor(private jwtserv: TcJwtService) {}
}
