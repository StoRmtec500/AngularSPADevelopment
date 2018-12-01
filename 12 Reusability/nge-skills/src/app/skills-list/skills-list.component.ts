import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class SkillsListComponent implements OnInit {
  @Input() title = "The Skills";
  @Output() onGetSkills: EventEmitter<string[]> = new EventEmitter<string[]>();
  skills: string[];

  constructor() {
    this.skills = ["Node", "TypeScript", "Angular"];
  }

  ngOnInit() {}

  getSkills() {
    this.onGetSkills.emit(this.skills);
  }
}
