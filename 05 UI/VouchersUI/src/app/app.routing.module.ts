import { CSSBindingComponent } from "./demos/cssbinding/binding.component";
import { UsingBootstrapComponent } from "./demos/using-bootstrap/using-bootstrap.component";
import { UsingMaterialComponent } from "./demos/using-material/using-material.component";
import { DemosComponent } from "./demos/demos.component";
import { VouchersListComponent } from "./vouchers/vouchers-list.component";
import { VoucherComponent } from "./vouchers/voucher/voucher.component";
import { AccountsComponent } from "./accounts/accounts.component";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { RouteGuard } from "./route.guard.service";
import { FlexboxComponent } from "./demos/flexbox/flexbox.component";
import { MaterialTableComponent } from "./demos/material-table/material-table.component";
import { MaterialDialogComponent } from "./demos/material-dialog/material-dialog.component";
import { EditorComponent } from "./shared/editor/editor.component";
import { UploadComponent } from "./shared/upload/upload.component";
import { VoucherResolver } from "./vouchers/voucher/voucher-resolver.service";
import { AccountResolver } from "./accounts/account-resolver.service";
import { FlexMediaQueryComponent } from "./demos/flex-media-query/flex-media-query.component";
import { FlexLayoutComponent } from "./demos/flex-layout/flex-layout.component";
import { ChartingComponent } from "./demos/charting/charting.component";
import { DragDropComponent } from "./demos/drag-drop/drag-drop.component";
import { VirtualScrollComponent } from "./demos/virtual-scroll/virtual-scroll.component";
import { CssgridComponent } from "./demos/cssgrid/cssgrid.component";
import { GoogleFontsComponent } from "./demos/google-fonts/google-fonts.component";

const appRoutes: Routes = [
  {
    path: "",
    component: DemosComponent,
    data: { title: "Demos" },
    children: [
      { path: "cssbasics", component: CSSBindingComponent },
      { path: "bootstrap", component: UsingBootstrapComponent },
      { path: "cssgrid", component: CssgridComponent },
      { path: "material", component: UsingMaterialComponent },
      { path: "material-table", component: MaterialTableComponent },
      { path: "material-dialog", component: MaterialDialogComponent },
      { path: "fonts", component: GoogleFontsComponent },
      { path: "flexbox", component: FlexboxComponent },
      { path: "flexmediaq", component: FlexMediaQueryComponent },
      { path: "flexlayout", component: FlexLayoutComponent },
      { path: "thirdparty", component: ChartingComponent },
      { path: "dragdrop", component: DragDropComponent },
      { path: "virtualscroll", component: VirtualScrollComponent }
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
