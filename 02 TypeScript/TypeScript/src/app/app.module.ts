import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing.module";
import { ClassesComponent } from "./demos/classes/classes.component";
import { ContentProjectionComponent } from "./demos/content-projection/content-projection.component";
import { EmployeeComponent } from "./demos/content-projection/employee/employee.component";
import { DemosComponent } from "./demos/demos.component";
import { FunctionsComponent } from "./demos/functions/functions.component";
import { GenericsComponent } from "./demos/generics/generics.component";
import { InterfacesComponent } from "./demos/interfaces/interfaces.component";
import { ModulesComponent } from "./demos/modules/modules.component";
import { ObjectLiteralsComponent } from "./demos/object-literals/object-literals.component";
import { ServicesComponent } from "./demos/services/services.component";
import { TypesComponent } from "./demos/types/types.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { VouchersService } from "./vouchers/voucher.service";
import { DemoService } from "./demos/demo.service";

@NgModule({
  declarations: [
    AppComponent,
    DemosComponent,
    ContentProjectionComponent,
    EmployeeComponent,
    NavbarComponent,
    TypesComponent,
    ClassesComponent,
    FunctionsComponent,
    InterfacesComponent,
    GenericsComponent,
    ModulesComponent,
    ServicesComponent,
    ObjectLiteralsComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [
    VouchersService

    // {provide: LOCALE_ID, useValue: "de-DE"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
