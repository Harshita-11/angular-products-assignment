/**
 * Core angular modules
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgStyle } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * Third party library modules - bootstrap, primeng etc
 */
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/**
 * Application level modules and components
 */
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { TcConfigService, TcHttpInterceptor, TcJwtService, TcHttpHandler } from 'tc-angular-services';
import { APP_CONSTANT } from './app.constant';

/**
 * This factory function will execute before bootstrapping of application
 * It will set cookie in document and then allow app to load
 * @param TcConfigService
 */
export function configServiceFactory(tcConfigService: TcConfigService): Function {
    return () => tcConfigService.initConfig(
        APP_CONSTANT.config.apiUrl,
        APP_CONSTANT.config.tokenData
    );
}

/**
 * The bootstrap module for app root component
 * This module is not actual exportable module.
 * only "./modules/*.module" will get exported as npm package
 * This module is only for lazily render and test "./modules/*.module"
 */
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        NgbModule.forRoot(),
        HttpClientModule,
        BrowserAnimationsModule
    ],
    providers: [
        TcConfigService,
        {
            provide: APP_INITIALIZER,
            useFactory: configServiceFactory,
            deps: [TcConfigService],
            multi: true
        },
        TcHttpHandler,
        TcJwtService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TcHttpInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
