import { Injectable } from '@angular/core';

import { APP_CONFIG } from '../app.config';
import { CommonRequestResponseService } from './common-request-response.service'

@Injectable()
export class CommonService {
    constructor(
        private commonRequestResponseService : CommonRequestResponseService
    ) { }
    // Get country data
    getCountryData = () => this.commonRequestResponseService.post('gereral-functions.php?action=get_country_data', {});
    // Get state data on behalf of country id 
    getStateData = countryId => this.commonRequestResponseService.post('gereral-functions.php?action=get_state_data', {countryId});
    // Get category data
    getCategoryData = () => this.commonRequestResponseService.get('category.php?action=get_category');
    // Check object
    isObject = value => value !== null && typeof value === 'object';
}

