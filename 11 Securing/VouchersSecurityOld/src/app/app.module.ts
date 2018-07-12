import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeDe from '@angular/common/locales/de';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AccountDetailComponent } from './accounts/account-detail/account-detail.component';
import { AccountsService } from './accounts/account.service';
import { AccountsListComponent } from './accounts/accounts-list.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { DemosModule } from './demos/demos.module';
import { MaterialModule } from './material.module';
import { RouteGuard } from './route.guard.service';
import { ChartingService } from './shared/charting/charting.service';
import { DataStoreService } from './shared/data-store/data-store-service';
import { EventBusService } from './shared/event-bus/event-bus.service';
import { SharedModule } from './shared/shared.module';
import { StatisticsComponent } from './statistics/statistics.component';
import { VouchersService } from './vouchers/voucher.service';
import { VoucherDetailComponent } from './vouchers/voucher/voucher-detail/voucher-detail.component';
import { VoucherDetailsListComponent } from './vouchers/voucher/voucher-details-list/voucher-details-list.component';
import { VoucherComponent } from './vouchers/voucher/voucher.component';
import { VouchersListComponent } from './vouchers/vouchers-list.component';

registerLocaleData(localeDe);

@NgModule({
  declarations: [
    AppComponent,
    AccountsListComponent,
    AccountDetailComponent,
    VouchersListComponent,
    VoucherComponent,
    VoucherDetailComponent,
    VoucherDetailsListComponent,
    StatisticsComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    DemosModule,
    NgxChartsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "de-DE" },
    RouteGuard,
    DataStoreService,
    EventBusService,
    VouchersService,
    AccountsService,
    ChartingService
    // {provide: HTTP_INTERCEPTORS, useClass: VouchersInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
