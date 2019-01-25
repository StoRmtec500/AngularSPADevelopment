import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { FileUploadModule } from "ng2-file-upload";
import { CKEditorModule } from "ngx-ckeditor";
import { NavbarComponent } from ".";
import { MaterialModule } from "../material.module";
import { CheckPipe } from "./checked/check.pipe";
import { EditorComponent } from "./editor/editor.component";
import { SidePanelComponent } from "./side-panel/side-panel.component";
import { UploadComponent } from "./upload/upload.component";

const mods = [
  UploadComponent,
  NavbarComponent,
  EditorComponent,
  CheckPipe,
  SidePanelComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MaterialModule,
    FileUploadModule,
    CKEditorModule
  ],
  declarations: mods,
  exports: mods
})
export class SharedModule {}
