import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { DemoItem } from './demoItem';

@Injectable()
export class DemoService {

    private items: DemoItem [] ;

    constructor(private httpClient: HttpClient) { }

    getItems() : Promise<any> {
        return this.httpClient.get('/assets/demos.json').toPromise();          
    }
}
