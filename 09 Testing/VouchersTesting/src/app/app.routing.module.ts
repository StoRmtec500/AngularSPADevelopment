import { DemosComponent } from "./demos/demos.component";
import { VouchersListComponent } from "./vouchers/vouchers-list.component";
import { VoucherComponent } from "./vouchers/voucher/voucher.component";
import { AccountsComponent } from "./accounts/accounts.component";
import { RouterModule, Routes } from "@angular/router";
import { NgModule, ViewChild } from "@angular/core";
import { RouteGuard } from "./route.guard.service";
import { EditorComponent } from "./shared/editor/editor.component";
import { UploadComponent } from "./shared/upload/upload.component";
import { VoucherResolver } from "./vouchers/voucher/voucher-resolver.service";
import { AccountResolver } from "./accounts/account-resolver.service";
import { StatisticsComponent } from "./statistics/statistics.component";
import { HerosComponent } from "./hero/hero/heros.component";
import { UnitTestingComponent } from "./demos/unit-testing/unit-testing.component";
import { TestPipeComponent } from "./demos/test-pipe/test-pipe.component";
import { SimpleServiceComponent } from "./demos/simple-service/simple-service.component";
import { SimpleCompComponent } from "./demos/simple-comp/simple-comp.component";
import { CompInteractionComponent } from "./demos/comp-interaction/comp-interaction.component";
import { ShallowIntegrationComponent } from "./demos/shallow-integration/shallow-integration.component";
import { DeepIntegrationComponent } from "./demos/deep-integration/deep-integration.component";

const appRoutes: Routes = [
  {
    path: "",
    component: DemosComponent,
    data: { title: "Demos" },
    children: [
      { path: "unittesting", component: UnitTestingComponent },
      { path: "testpipe", component: TestPipeComponent },
      { path: "simpleservice", component: SimpleServiceComponent },
      { path: "simplecomp", component: SimpleCompComponent },
      { path: "compinteract", component: CompInteractionComponent },
      { path: "shallowint", component: ShallowIntegrationComponent },
      { path: "deepint", component: DeepIntegrationComponent },
      { path: "heros", component: HerosComponent }
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
  { path: "**", component: DemosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
