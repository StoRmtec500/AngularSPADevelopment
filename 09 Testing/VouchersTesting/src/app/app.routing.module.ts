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
import { TemplateDrivenComponent } from "./demos/template-driven/template-driven.component";
import { ReactiveFormsComponent } from "./demos/reactive-forms/reactive-forms.component";
import { FormsBuilderComponent } from "./demos/forms-builder/forms-builder.component";
import { TemplateValidationComponent } from "./demos/template-validation/template-validation.component";
import { ReactiveValidationComponent } from "./demos/reactive-validation/reactive-validation.component";
import { StatisticsComponent } from "./statistics/statistics.component";

const appRoutes: Routes = [
  {
    path: "",
    component: DemosComponent,
    data: {title: "Demos"},
    children: [
      { path: 'templatedriven', component: TemplateDrivenComponent },
        { path: 'reactiveforms', component: ReactiveFormsComponent },
        { path: 'formsbuilder', component: FormsBuilderComponent },
        { path: 'templatevalidation', component: TemplateValidationComponent },
        { path: 'reactivevalidation', component: ReactiveValidationComponent },
    ]
  },
  {    
    path: "vouchers",
    data: {title: "Vouchers"},
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
    path: "statistics",
    component: StatisticsComponent,
    data: {title: "Statistics"},
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
