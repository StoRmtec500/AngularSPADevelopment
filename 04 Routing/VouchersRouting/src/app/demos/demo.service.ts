import { HttpClient } from '@angular/common/http';
import { DemoItem } from './demoItem';
import { Injectable } from '@angular/core';

@Injectable()
export class DemoService {

    private items: DemoItem [] ;

    constructor(private http: HttpClient) { }

    getItems() : Promise<any> {
        return this.http.get('/assets/demos.json').toPromise();          
    }
}
