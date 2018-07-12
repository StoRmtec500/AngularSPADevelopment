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

import { ObservableCrudComponent } from "./demos/observable-crud/observable-crud.component";

import { MouseDomObservablesComponent } from "./demos/mouse-dom-observables/mouse-dom-observables.component";
import { OperatorsComponent } from "./demos/operators/operators.component";
import { FlexLayoutApiComponent } from "./demos/flex-layout-api/flex-layout-api.component";
import { SimpleObservableComponent } from "./demos/simple-observable/simple-observable.component";
import { ObservableStreamComponent } from "./demos/observable-stream/observable-stream.component";

const appRoutes: Routes = [
  {
    path: "",
    component: DemosComponent,
    children: [
      { path: "observables", component: ObservableStreamComponent },
      { path: "simple", component: SimpleObservableComponent },
      { path: "observablescurd", component: ObservableCrudComponent },
      { path: "mousedomobs", component: MouseDomObservablesComponent },
      { path: "operators", component: OperatorsComponent },
      { path: "flexlayoutapi", component: FlexLayoutApiComponent }
    ]
  },
  {
    path: "vouchers",
    component: VouchersListComponent
  },
  {
    path: "vouchers/:id",
    component: VoucherComponent,
    resolve: { voucher: VoucherResolver, accounts: AccountResolver }
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
