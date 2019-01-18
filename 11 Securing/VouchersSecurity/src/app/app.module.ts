import { registerLocaleData } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import localeDe from "@angular/common/locales/de";
import { LOCALE_ID, NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { MsAdalAngular6Module } from "microsoft-adal-angular6";
import { AccountDetailComponent } from "./accounts/account-detail/account-detail.component";
import { AccountsService } from "./accounts/account.service";
import { AccountsListComponent } from "./accounts/accounts-list.component";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing.module";
import { DemosModule } from "./demos/demos.module";
import { MaterialModule } from "./material.module";
import { RouteGuard } from "./route.guard.service";
import { AuthInterceptor } from "./shared/auth/auth.interceptor";
import { ChartingService } from "./shared/charting/charting.service";
import { DataStoreService } from "./shared/data-store/data-store-service";
import { EventBusService } from "./shared/event-bus/event-bus.service";
import { SharedModule } from "./shared/shared.module";
import { StatisticsComponent } from "./statistics/statistics.component";
import { VouchersService } from "./vouchers/voucher.service";
import { VoucherDetailComponent } from "./vouchers/voucher/voucher-detail/voucher-detail.component";
import { VoucherDetailsListComponent } from "./vouchers/voucher/voucher-details-list/voucher-details-list.component";
import { VoucherComponent } from "./vouchers/voucher/voucher.component";
import { VouchersListComponent } from "./vouchers/vouchers-list.component";
import { environment } from "src/environments/environment";

registerLocaleData(localeDe);

export const firebaseConfig = {
  apiKey: "AIzaSyAOdenXy2X7kx9LWwVHk9zn3Humr2Cl9Tc",
  authDomain: "vouchers-c334a.firebaseapp.com",
  databaseURL: "https://vouchers-c334a.firebaseio.com",
  projectId: "vouchers-c334a",
  storageBucket: "vouchers-c334a.appspot.com",
  messagingSenderId: "269739409229"
};

// export const eps = {
//   graphApiUri: "https://graph.microsoft.com",
//   sharePointUri: "https://integrationsonline.sharepoint.com" // Replace "integrationsonline" with your Tenant-Name & Make sure you assign permissions in Azure AD and enable Implicit Flow
// };

export const adalCfg = {
  tenant: "d92b247e-90e0-4469-a129-6a32866c0d0a",
  clientId: "4e60c128-a813-4031-bd99-cf4327cce885", //=> Application ID in Azure
  cacheLocation: "localStorage",
  endpoints: environment.o365Endpoints,
  returnUrl: "http://localhost:4200"
};

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
    NgxChartsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    MsAdalAngular6Module.forRoot(adalCfg)
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "de-DE" },
    RouteGuard,
    DataStoreService,
    EventBusService,
    VouchersService,
    AccountsService,
    ChartingService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
