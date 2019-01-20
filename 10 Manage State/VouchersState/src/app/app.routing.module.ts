import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AccountDetailComponent } from "./accounts/account-detail/account-detail.component";
import { AccountsListComponent } from "./accounts/accounts-list.component";
import { DemosComponent } from "./demos/demos.component";
import { RouteGuard } from "./route.guard.service";
import { EditorComponent } from "./shared/editor/editor.component";
import { UploadComponent } from "./shared/upload/upload.component";
import { StatisticsComponent } from "./statistics/statistics.component";
import { VoucherComponent } from "./vouchers/voucher/voucher.component";
import { VouchersListComponent } from "./vouchers/vouchers-list.component";
import { SimpleCalcComponent } from "./demos/ngrx/simple.calc.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { StatefulComponent } from "./demos/stateful/stateful.component";
import { EvtBusComponent } from "./demos/evt-bus/evt-bus.component";
import { SimpleDataStoreComponent } from "./demos/simple-data-store/simple-data-store.component";

const appRoutes: Routes = [
  {
    path: "",
    component: DemosComponent,
    data: { title: "Demos" },
    children: [
      { path: "stateful", component: StatefulComponent },
      { path: "simpleds", component: SimpleDataStoreComponent },
      { path: "evtbus", component: EvtBusComponent },
      { path: "ngrx", component: SimpleCalcComponent }
    ]
  },
  {
    path: "vouchers",
    data: { title: "Vouchers" },
    component: VouchersListComponent
  },
  {
    path: "vouchers/:id",
    component: VoucherComponent
  },
  {
    path: "accounts",
    component: AccountsListComponent,
    data: { title: "Accounts" }
  },
  {
    path: "accounts/:id",
    component: AccountDetailComponent
  },
  {
    path: "statistics",
    component: StatisticsComponent,
    data: { title: "Statistics" }
  },
  {
    path: "admin",
    loadChildren: "./admin/admin.module#AdminModule",
    data: { title: "Admin" },
    canActivate: [RouteGuard]
  },
  { path: "showeditor", component: EditorComponent, outlet: "sidebarOutlet" },
  { path: "upload", component: UploadComponent, outlet: "sidebarOutlet" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
