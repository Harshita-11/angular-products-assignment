import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiContextPath = 'enterprise-rules/v1',
indirectApiCallContextPath = 'ihonboarding/v1',
chainApiCallContextPath = '/ihchain/v1',
apiContextPlaceholder = '{{api_module_context_path}}';

const chainApiCallMethodArr = ['getChainDetails'];
const indirectApiCallMethodArr = ['getEnterpriseRateList', 'getErrorDetails'];

@Injectable()
export class HTTPService {
    constructor(private $http: HttpClient) {}

    get(urlPath: string, methodName: string) {
        const url = this.getApiUrl(methodName) + urlPath;
        return this.$http.get(url);
    }

    post(urlPath: string, param: any, methodName: string) {
        const url = this.getApiUrl(methodName) + urlPath;
        return this.$http.post(url, param);
    }

    put(urlPath: string, methodName: string , param ?: any) {
        const url = this.getApiUrl(methodName) + urlPath;
        return this.$http.put(url, param);
    }

    delete(urlPath: string, param: any, methodName: string) {
        const url = this.getApiUrl(methodName) + urlPath;
        return this.$http.delete(url, param);
    }
    getTest(urlPath: string) {
        return this.$http.get(urlPath);
    }

    getApiUrl(methodNmae) {
        let apiUrl: string;
        if (indirectApiCallMethodArr.indexOf(methodNmae) > -1) {
            apiUrl = window['CONFIG']['apiUrl'].replace(apiContextPlaceholder, indirectApiCallContextPath);
        } else if (chainApiCallMethodArr.indexOf(methodNmae) > -1) {
            apiUrl = window['CONFIG']['apiUrl'].replace(apiContextPlaceholder, chainApiCallContextPath);
        } else {
            apiUrl = window['CONFIG']['apiUrl'].replace(apiContextPlaceholder, apiContextPath);
        }
        return apiUrl;
    }
}
