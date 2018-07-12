import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as currency from '../actions/currency';
import { FixerService } from '../fixer.service';
import { CurrenciesUpdatedAction } from './../actions/currency';

@Injectable()
export class CurrencyEffects {
    @Effect()
    update$: Observable<Action> = this.actions$
        .ofType(currency.CURRENCIESUPDATE)
        .switchMap(() =>
            this.fs
                .getRates()
                .map(data => new CurrenciesUpdatedAction(data))
        );

    constructor(
        private fs:FixerService,
        private actions$: Actions
    ) {}
}