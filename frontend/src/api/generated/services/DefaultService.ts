/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PingResponse } from '../models/PingResponse';
import type { TemplateResponse } from '../models/TemplateResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DefaultService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @returns PingResponse Ok
     * @throws ApiError
     */
    public getMessage(): CancelablePromise<PingResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ping',
        });
    }

    /**
     * @returns TemplateResponse Ok
     * @throws ApiError
     */
    public getTemplates(): CancelablePromise<TemplateResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Templates/getTemplate',
        });
    }

}
