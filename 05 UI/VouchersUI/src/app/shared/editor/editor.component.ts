import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-editor",
  templateUrl: "./editor.component.html",
  styleUrls: ["./editor.component.css"]
})
export class EditorComponent implements OnInit {
  // https://github.com/HstarComponents/ngx-ckeditor
  // https://docs.ckeditor.com/
  // Easy toobar config: https://ckeditor.com/latest/samples/toolbarconfigurator/index.html#basic

  constructor() {}

  public editorValue: string = "";

  ckEditorConfig: {} = {
    toolbarGroups: [
      { name: "document", groups: ["mode", "document", "doctools"] },
      { name: "clipboard", groups: ["clipboard", "undo"] },
      {
        name: "editing",
        groups: ["find", "selection", "spellchecker", "editing"]
      },
      { name: "forms", groups: ["forms"] },
      "/",
      { name: "basicstyles", groups: ["basicstyles", "cleanup"] },
      {
        name: "paragraph",
        groups: ["list", "indent", "blocks", "align", "bidi", "paragraph"]
      }
    ],
    height: 400
  };

  ngOnInit() {}
}
