import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UploadComponent } from "./upload/upload.component";
import { NavbarComponent, MatchHeightDirective } from ".";
import { RouterModule } from "@angular/router";
import { EditorComponent } from "./editor/editor.component";
import { MaterialModule } from "../material.module";
import { CheckPipe } from "./checked/check.pipe";
import { SidePanelComponent } from "./side-panel/side-panel.component";
import { FormsModule } from "@angular/forms";
import { CKEditorComponent } from "ngx-ckeditor";
import { FileUploadModule } from "ng2-file-upload";

const mods = [
  UploadComponent,
  NavbarComponent,
  MatchHeightDirective,
  EditorComponent,
  CheckPipe,
  SidePanelComponent,
  CKEditorComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MaterialModule,
    FileUploadModule
  ],
  declarations: mods,
  exports: mods
})
export class SharedModule {}
