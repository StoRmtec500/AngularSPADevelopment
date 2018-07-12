import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { DemoService } from './demo.service';
import { DemosComponent } from './demos.component';
import { MovieService } from './movie.service';
import { FixerService } from './ngrx/fixer.service';
import { reducers } from './ngrx/reducers';
import { SimpleCalcComponent } from './ngrx/simple.calc.component';
import { PersonService } from './person.service';
import { EffectsModule } from '@ngrx/effects';
import { CurrencyEffects } from './ngrx/effects/currencyEffects';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    MaterialModule,
    NgxChartsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([CurrencyEffects])    
  ],
  declarations: [
    DemosComponent, SimpleCalcComponent   
  ],
  providers: [DemoService, MovieService, PersonService, FixerService]
})
export class DemosModule {}
