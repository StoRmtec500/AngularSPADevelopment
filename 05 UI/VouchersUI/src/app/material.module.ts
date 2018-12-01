import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import "hammerjs";

import {
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatSidenavModule,
  MatListModule,
  MatToolbarModule,
  MatBadgeModule,
  MatButtonToggleModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatCardModule,
  MatDialogModule,
  MatSelectModule,
  MatOptionModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSlideToggleModule,
  MatRadioModule,
  MatTreeModule
} from "@angular/material";

const mods = [
  CommonModule,
  BrowserModule,
  MatTreeModule,
  BrowserAnimationsModule,
  MatSidenavModule,
  MatListModule,
  MatButtonToggleModule,
  MatToolbarModule,
  MatIconModule,
  MatTableModule,
  MatBadgeModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatCardModule,
  MatSelectModule,
  MatOptionModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule,
  MatDialogModule,
  MatDatepickerModule,
  MatSlideToggleModule,
  MatRadioModule,
  FlexLayoutModule
];

@NgModule({
  imports: mods,
  declarations: [],
  exports: mods
})
export class MaterialModule {}
