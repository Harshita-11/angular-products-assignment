/**
 * Core angular modules
 */
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { TranslateService } from '@ngx-translate/core';
import { TcTranslateService, TcHttpHandler } from 'tc-angular-services';
import { Product } from '../modules/common/models/Product';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ProductListService } from '../modules/search-product-list/services/search-product.service';

@Component({
    selector: 'template-project-app',
    templateUrl: './template-project.component.html',
    styleUrls: [
        './template-project.component.css'
    ],
    encapsulation: ViewEncapsulation.None
})

/**
 * Root component for template project
 */
export class SearchProductListComponent implements OnInit {
    tokenData: Object;
    resultData: any[];
    loading: boolean;
    selectAllFlag: boolean;
    buttonLabel2: string;
    marginTopBottom: string;
    title: string;
    filteredResultData: any[];


    constructor(
        private tcTranslateService: TcTranslateService,
        private translate: TranslateService,
        private tcHttpHandler: TcHttpHandler,
        private modalService: NgbModal,
        private templateService: ProductListService ) {
        this.tcTranslateService.initTranslation(translate);
        this.marginTopBottom = '30px';
        this.resultData = [];
        this.filteredResultData = [];

        /**
         * Subscribe to loader object
         */

        /**
         * Token decoded data is available in global CONFIG object
         * Such as user info, property info etc
         */
        this.tokenData = window['CONFIG']['tokenDecodedData'];
        this.title = 'Search screen';
    }
    ngOnInit() {
        this.getTemplateData();
    }
    getTemplateData() {
       this.templateService.getProductsList()
       .subscribe((res: any) => {
        this.resultData = res;
        console.log('this.resultData', this.resultData);
       });
    }
    onChange(deviceValue) {
        const newVal = event.target['value'];
        const filteredResultData = this.resultData.filter(newVal);
        console.log(filteredResultData);
    }
}
