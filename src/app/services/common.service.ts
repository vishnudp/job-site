import { Injectable } from '@angular/core';

import { APP_CONFIG } from '../app.config';
import { CommonRequestResponseService } from './common-request-response.service'

@Injectable()
export class CommonService {
    constructor(
        private commonRequestResponseService : CommonRequestResponseService) { }

    getCountryData = () => this.commonRequestResponseService.post('gereral-functions.php?action=get_country_data', {});

    getStateData = countryId => this.commonRequestResponseService.post('gereral-functions.php?action=get_state_data', {countryId});

    // Check object
    isObject = value => value !== null && typeof value === 'object';
}

