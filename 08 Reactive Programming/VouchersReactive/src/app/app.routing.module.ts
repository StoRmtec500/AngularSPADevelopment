import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccountResolver } from "./accounts/account-resolver.service";
import { AccountsComponent } from "./accounts/accounts.component";
import { CreatingObservableComponent } from "./demos/creating-observables/creating-observable.component";
import { DemosComponent } from "./demos/demos.component";
import { FlexLayoutApiComponent } from "./demos/flex-layout-api/flex-layout-api.component";
import { MouseDomObservablesComponent } from "./demos/mouse-dom-observables/mouse-dom-observables.component";
import { ObservableCrudComponent } from "./demos/observable-crud/observable-crud.component";
import { ObservableStreamComponent } from "./demos/observable-stream/observable-stream.component";
import { OperatorsComponent } from "./demos/operators/operators.component";
import { UnsubscribingComponent } from "./demos/unsubscribing/unsubscribing.component";
import { RouteGuard } from "./route.guard.service";
import { EditorComponent } from "./shared/editor/editor.component";
import { UploadComponent } from "./shared/upload/upload.component";
import { VoucherResolver } from "./vouchers/voucher/voucher-resolver.service";
import { VoucherComponent } from "./vouchers/voucher/voucher.component";
import { VouchersListComponent } from "./vouchers/vouchers-list.component";
import { SubsinkComponent } from "./demos/subsink/subsink.component";

const appRoutes: Routes = [
  {
    path: "",
    component: DemosComponent,
    data: { title: "Demos" },
    children: [
      { path: "observables", component: ObservableStreamComponent },
      { path: "creating", component: CreatingObservableComponent },
      { path: "observablescurd", component: ObservableCrudComponent },
      { path: "mousedomobs", component: MouseDomObservablesComponent },
      { path: "operators", component: OperatorsComponent },
      { path: "flexlayoutapi", component: FlexLayoutApiComponent },
      { path: "unsubscribe", component: UnsubscribingComponent },
      { path: "subsink", component: SubsinkComponent }
    ]
  },
  {
    path: "vouchers",
    data: { title: "Vouchers" },
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
    data: { title: "Admin" },
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
