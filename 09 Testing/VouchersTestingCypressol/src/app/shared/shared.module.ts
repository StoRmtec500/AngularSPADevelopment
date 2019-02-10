import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FileUploadModule } from 'ng2-file-upload';
import { CKEditorComponent } from 'ngx-ckeditor';

import { MatchHeightDirective, NavbarComponent } from '.';
import { MaterialModule } from '../material.module';
import { CalculatorComponent } from './calculator/calculator.component';
import { CurrencyService } from './calculator/currency.service';
import { CheckPipe } from './checked/check.pipe';
import { EditorComponent } from './editor/editor.component';
import { ScreenService } from './screen/screen.service';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { UploadComponent } from './upload/upload.component';

const mods = [
  UploadComponent,
  NavbarComponent,
  MatchHeightDirective,
  CalculatorComponent,
  EditorComponent,
  CheckPipe,
  SidePanelComponent,
  CKEditorComponent
];

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, MaterialModule, FileUploadModule],
  declarations: mods,
  exports: mods,
  providers: [CurrencyService, ScreenService]
})
export class SharedModule {}
