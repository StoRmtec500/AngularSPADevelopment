import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { MaterialModule } from '../material.module';
import { CalculatorComponent } from '../shared/calculator/calculator.component';
import { SharedModule } from '../shared/shared.module';
import { CSSBindingComponent } from './cssbinding/binding.component';
import { DemoService } from './demo.service';
import { DemosComponent } from './demos.component';
import { FlexLayoutComponent } from './flex-layout/flex-layout.component';
import { FlexMediaQueryComponent } from './flex-media-query/flex-media-query.component';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { MaterialDialogComponent } from './material-dialog/material-dialog.component';
import { MaterialTableComponent } from './material-table/material-table.component';
import { MovieService } from './movie.service';
import { PersonService } from './person.service';
import { UsingBootstrapComponent } from './using-bootstrap/using-bootstrap.component';
import { UsingMaterialComponent } from './using-material/using-material.component';
import { UsingThirdpartyComponent } from './using-thirdparty/using-thirdparty.component';

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
    NgxChartsModule
  ],
  declarations: [
    DemosComponent,
    FlexLayoutComponent,
    UsingBootstrapComponent,
    CSSBindingComponent,
    UsingMaterialComponent,
    MaterialTableComponent,
    MaterialDialogComponent,
    UsingThirdpartyComponent,
    FlexboxComponent,
    FlexMediaQueryComponent
  ],
  entryComponents: [MaterialDialogComponent, CalculatorComponent],
  providers: [DemoService, MovieService, PersonService]
})
export class DemosModule {}
