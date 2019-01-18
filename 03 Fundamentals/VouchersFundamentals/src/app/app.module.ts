import { registerLocaleData } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule, LOCALE_ID } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { AccountsComponent } from "./accounts/accounts.component";
import { AdminComponent } from "./admin/admin.component";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing.module";
import { BindingComponent } from "./demos/binding/binding.component";
import { ContentProjectionComponent } from "./demos/content-projection/content-projection.component";
import { DemoNavComponent } from "./demos/content-projection/demo-nav/demo-nav.component";
import { EmployeeComponent } from "./demos/content-projection/employee/employee.component";
import { CustomDirectivesComponent } from "./demos/custom-directives/custom-directives.component";
import { UnderlineDirective } from "./demos/custom-directives/underline.directive";
import { CustomPipesComponent } from "./demos/custom-pipes/custom-pipes.component";
import { VoucherFilterPipe } from "./demos/custom-pipes/voucher-filter.pipe";
import { DemosComponent } from "./demos/demos.component";
import { DirectivesComponent } from "./demos/directives/directives.component";
import { ExpressionsComponent } from "./demos/expressions/expressions.component";
import { InlineComponent } from "./demos/inline/inline.component";
import { InternationalizationComponent } from "./demos/internationalization/internationalization.component";
import { ParentChildComponent } from "./demos/parent-child/parent-child.component";
import { PersonEditComponent } from "./demos/persons/person-edit/person-edit.component";
import { PersonService } from "./demos/persons/person.service";
import { PersonsListComponent } from "./demos/persons/persons-list/persons-list.component";
import { PipesComponent } from "./demos/pipes/pipes.component";
import { RepeaterComponent } from "./demos/repeater/repeater.component";
import { StructDirectivesComponent } from "./demos/struct-directives/struct-directives.component";
import { TemplateComponent } from "./demos/template/template.component";
import { AlertComponent } from "./demos/view-child/alert/alert.component";
import { ViewChildComponent } from "./demos/view-child/view-child.component";
import { NavbarComponent } from "./shared/index";
import { VoucherDetailComponent } from "./vouchers/voucher/voucher-detail/voucher-detail.component";
import { VoucherDetailsListComponent } from "./vouchers/voucher/voucher-details-list/voucher-details-list.component";
import { VoucherComponent } from "./vouchers/voucher/voucher.component";
import { VouchersListComponent } from "./vouchers/vouchers-list.component";
import { CheckPipe } from "./demos/custom-pipes/check.pipe";

import localeDe from "@angular/common/locales/de";
import { ToEuroPipe } from "./demos/custom-pipes/to-euro.pipe";
import { EuroDirective } from "./demos/custom-directives/euro.directive";
registerLocaleData(localeDe);

@NgModule({
  declarations: [
    AppComponent,
    VouchersListComponent,
    AccountsComponent,
    VoucherComponent,
    VoucherDetailComponent,
    VoucherDetailsListComponent,
    DemosComponent,
    InlineComponent,
    BindingComponent,
    TemplateComponent,
    PipesComponent,
    DirectivesComponent,
    StructDirectivesComponent,
    CustomDirectivesComponent,
    CustomPipesComponent,
    InternationalizationComponent,
    ExpressionsComponent,
    VoucherFilterPipe,
    UnderlineDirective,
    PersonsListComponent,
    PersonEditComponent,
    ContentProjectionComponent,
    EmployeeComponent,
    NavbarComponent,
    RepeaterComponent,
    ParentChildComponent,
    ViewChildComponent,
    AlertComponent,
    AdminComponent,
    DemoNavComponent,
    CheckPipe,
    ToEuroPipe,
    EuroDirective
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  // providers: [PersonService],
  providers: [PersonService, { provide: LOCALE_ID, useValue: "de" }],
  bootstrap: [AppComponent]
})
export class AppModule {}
