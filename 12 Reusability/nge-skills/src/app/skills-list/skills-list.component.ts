import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "app-skills-list",
  templateUrl: "./skills-list.component.html",
  styleUrls: ["./skills-list.component.scss"],
  encapsulation: ViewEncapsulation.Native
})
export class SkillsListComponent implements OnInit {
  @Input() title = "The Skills";
  @Output() onSaveSkills: EventEmitter<string[]> = new EventEmitter<string[]>();
  skills: string[];
  skillToAdd: string;

  constructor() {
    this.skills = ["Node", "TypeScript", "Angular"];
  }

  ngOnInit() {}

  getSkills() {
    console.log("trigger saving skills from within element", this.skills);
    this.onSaveSkills.emit(this.skills);
  }

  removeSkill(s: string) {
    this.skills = this.skills.filter(i => i !== s);
  }

  addSkill() {
    this.skills.push(this.skillToAdd);
  }
}
