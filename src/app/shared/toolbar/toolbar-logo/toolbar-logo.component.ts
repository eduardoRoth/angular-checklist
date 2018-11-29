import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "ac-toolbar-logo",
  templateUrl: "./toolbar-logo.component.html",
  styleUrls: ["./toolbar-logo.component.scss"]
})
export class ToolbarLogoComponent implements OnInit {
  @Input() showText = true;

  constructor() {}

  ngOnInit() {}
}
