import { Injectable } from '@angular/core';
import { HTTPService } from '../../common/services/http.service';
import { Observable } from 'rxjs/Observable';
import { Product } from '../../common/models/Product';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { HttpErrorResponse } from '@angular/common/http';


@Injectable()
export class ProductListService {
    constructor(
        private httpService: HTTPService) {
    }
    /**
     * Method to get products from json
     */
    getProductsList(): Observable<any[]> {
        return this.httpService.getTest('../assets-tc/data/finalPoc.json')
        .map( (res: any[]) => {
            const response: any[] = res;
            return response;
        })
        .catch((error: HttpErrorResponse) => {
            return Observable.throw(error.error);
        });
    }
}
