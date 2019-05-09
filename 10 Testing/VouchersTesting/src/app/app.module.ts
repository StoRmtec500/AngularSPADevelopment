import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
  HttpClient
} from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";

import { registerLocaleData } from "@angular/common";
import localeDe from "@angular/common/locales/de";
import { LOCALE_ID, NgModule } from "@angular/core";
import { MarkdownModule, MarkedOptions, MarkedRenderer } from "ngx-markdown";

import { AccountResolver } from "./accounts/account-resolver.service";
import { AccountsComponent } from "./accounts/accounts.component";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing.module";
import { DemosModule } from "./demos/demos.module";
import { MaterialModule } from "./material.module";
import { RouteGuard } from "./route.guard.service";
import { SharedModule } from "./shared/shared.module";
import { VouchersService } from "./vouchers/voucher.service";
import { VoucherDetailComponent } from "./vouchers/voucher/voucher-detail/voucher-detail.component";
import { VoucherDetailsListComponent } from "./vouchers/voucher/voucher-details-list/voucher-details-list.component";
import { VoucherResolver } from "./vouchers/voucher/voucher-resolver.service";
import { VoucherComponent } from "./vouchers/voucher/voucher.component";
import { VouchersListComponent } from "./vouchers/vouchers-list.component";
import { VouchersInterceptor } from "./demos/voucher.interceptor";
import { StatisticsComponent } from "./statistics/statistics.component";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { LoginComponent } from "./shared/login/login.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
registerLocaleData(localeDe);

@NgModule({
  declarations: [
    AppComponent,
    VouchersListComponent,
    AccountsComponent,
    VoucherComponent,
    VoucherDetailComponent,
    VoucherDetailsListComponent,
    StatisticsComponent,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent
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
    NgxChartsModule,
    MaterialModule,
    SharedModule,
    MarkdownModule.forRoot({
      loader: HttpClient
    })
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "de-DE" },
    RouteGuard,
    VouchersService,
    // {provide: HTTP_INTERCEPTORS, useClass: VouchersInterceptor, multi: true},
    VoucherResolver,
    AccountResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
