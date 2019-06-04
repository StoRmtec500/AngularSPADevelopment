import { registerLocaleData } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import localeDe from "@angular/common/locales/de";
import { LOCALE_ID, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { AccountResolver } from "./accounts/account-resolver.service";
import { AccountsComponent } from "./accounts/accounts.component";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing.module";
import { CssgridComponent } from "./demos/cssgrid/cssgrid.component";
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

registerLocaleData(localeDe);

@NgModule({
  declarations: [
    AppComponent,
    VouchersListComponent,
    AccountsComponent,
    VoucherComponent,
    VoucherDetailComponent,
    VoucherDetailsListComponent,
    CssgridComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    DemosModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "de-DE" },
    RouteGuard,
    VouchersService,
    VoucherResolver,
    AccountResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
