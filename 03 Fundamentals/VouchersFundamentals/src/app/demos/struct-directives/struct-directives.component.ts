import { VouchersService } from "../../vouchers/voucher.service";
import { Voucher } from "../../shared/model/model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-struct-directives",
  templateUrl: "./struct-directives.component.html",
  styleUrls: ["./struct-directives.component.css"]
})
export class StructDirectivesComponent implements OnInit {
  constructor(private vs: VouchersService) {}

  persons = [{ name: "Heinz" }, { name: "Brunhilde" }, { name: "Susi" }];
  selectedPerson: string = this.persons[0].name;

  vouchers: Voucher[];

  showDivOne: boolean = true;

  currentDirection: DirectionEnum = DirectionEnum.East;
  direction = DirectionEnum;

  ngOnInit() {
    this.vs.getVouchers().subscribe(data => {
      this.vouchers = data;
    });
  }

  showVoucher(v: Voucher) {
    console.log(
      `navigating to voucher with text "${
        v.Text
      }" - covered later in more detail`
    );
  }
}

export enum DirectionEnum {
  East,
  West,
  North,
  South
}
