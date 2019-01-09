/**
 * Core angular modules
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

/**
 * Third party library modules - bootstrap, primeng etc
 */
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';

/**
 * Travelclick library tc-angular-components modules
 */
import { DropdownModule } from 'tc-angular-components';
import { TcTranslateService } from 'tc-angular-services';

/**
 * Application level components
 */
import { TemplateProjectRouting } from './template-project.routing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SearchProductListComponent } from './search-product-list.component';
import { HTTPService } from './common/services/http.service';
import { ProductListService } from './search-product-list/services/search-product.service';


/**
 *  AoT requires an exported function for factories
 */
export function HttpLoaderFactory(http: HttpClient) {
    /**
     * Update i18nUrl and set it for loading translations
     */
    const langApiUrl = window['CONFIG']['apiUrl']
        .replace('{{api_module_context_path}}', 'i18n/v1')
        + 'apps/admin-ui/locales/';
    /**
     * const langApiUrl = 'http://localhost:4200/assets-tc/locales/';
     */
    return new TcTranslateService().loadTranslation(http, langApiUrl);
}


/**
 * The bootstrap module
 * This is actual child application module which will be loaded lazily in root application
 */
@NgModule({
    declarations: [
        SearchProductListComponent
    ],
    imports: [
        CommonModule,
        DataTableModule,
        NgbModule.forRoot(),
        TemplateProjectRouting,
        DropdownModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    exports: [
        SearchProductListComponent
    ],
    providers: [
        TcTranslateService,
        ProductListService,
        HTTPService
    ],
    bootstrap: [SearchProductListComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class TemplateProjectModule { }
