import { DemosComponent } from "./demos/demos.component";
import { VouchersListComponent } from "./vouchers/vouchers-list.component";
import { VoucherComponent } from "./vouchers/voucher/voucher.component";
import { AccountsComponent } from "./accounts/accounts.component";
import { RouterModule, Routes } from "@angular/router";
import { NgModule, ViewChild } from "@angular/core";
import { AdminComponent } from "./admin/admin.component";
import { RouteGuard } from "./route.guard.service";
import { EditorComponent } from "./shared/editor/editor.component";
import { UploadComponent } from "./shared/upload/upload.component";
import { VoucherResolver } from "./vouchers/voucher/voucher-resolver.service";
import { AccountResolver } from "./accounts/account-resolver.service";

import { NoSQLInterceptorComponent } from './demos/no-sqlinterceptor/no-sqlinterceptor.component';
import { HttpClientsComponent } from './demos/http-clients/http-clients.component';
import { PromiseComponent } from './demos/promise/promise.component';
import { ObservableCrudComponent } from './demos/observable-crud/observable-crud.component';

const appRoutes: Routes = [
  {
    path: "",
    component: DemosComponent,
    children: [
      { path: "clients", component: HttpClientsComponent },
      { path: "promise", component: PromiseComponent },
      { path: "nosql", component: NoSQLInterceptorComponent },
      { path: "observablescurd", component: ObservableCrudComponent }
    ]
  },
  {
    path: "vouchers",
    component: VouchersListComponent
  },
  {
    path: "vouchers/:id",
    component: VoucherComponent,
    resolve: { voucher : VoucherResolver, accounts : AccountResolver}
  },
  {
    path: "accounts",
    component: AccountsComponent,
    data: { title: "Accounts" }
  },
  {
    path: "admin",
    loadChildren: "./admin/admin.module#AdminModule",
    data: { title: "The protected Admin page, lazy loaded as Module" },
    canActivate: [RouteGuard]
  },
  { path: "showeditor", component: EditorComponent, outlet: "sidebarOutlet" },
  { path: "upload", component: UploadComponent, outlet: "sidebarOutlet" },
  { path: "**", component: DemosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
