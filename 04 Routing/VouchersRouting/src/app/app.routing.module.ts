import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from 'app/accounts/accounts.component';
import { SecondaryRoutesComponent } from 'app/demos/secondary-routes/secondary-routes.component';

import { ChildRoutesComponent } from './demos/child-routes/child-routes.component';
import { DemosComponent } from './demos/demos.component';
import { RouteGardsComponent } from './demos/route-gards/route-gards.component';
import { RoutingBasicsComponent } from './demos/routing-basics/routing-basics.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouteGuard } from './route.guard.service';
import { EditorComponent } from './shared/editor/editor.component';
import { VoucherResolver } from './vouchers/voucher/voucher-resolver.service';
import { VoucherComponent } from './vouchers/voucher/voucher.component';
import { VouchersListComponent } from './vouchers/vouchers-list.component';
import { UploaderComponent } from './shared/uploader/uploader.component';

const appRoutes: Routes = [
  {
    path: "",
    component: DemosComponent,
    children: [
      { path: "routingbasics", component: RoutingBasicsComponent },
      { path: "childroutes", component: ChildRoutesComponent },
      { path: "secondary", component: SecondaryRoutesComponent },
      { path: "routegards", component: RouteGardsComponent }
    ]
  },
  {
    path: "vouchers",
    component: VouchersListComponent
  },
  {
    path: "vouchers/:id",
    component: VoucherComponent,
    resolve: { voucher : VoucherResolver}
  },
  {
    path: "accounts",
    component: AccountsComponent
  },
  {
    path: "admin",
    loadChildren: "./admin/admin.module#AdminModule",
    data: { title: "The protected Admin page, lazy loaded as Module" },
    canActivate: [RouteGuard]
  },
  {
    path: "wotschers",
    redirectTo: "vouchers",
    pathMatch: "full"
  },
  { path: "showeditor", component: EditorComponent, outlet: "editoroutlet" },
  { path: "showuploader", component: UploaderComponent, outlet: "editoroutlet" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: false })],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
