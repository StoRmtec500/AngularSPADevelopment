import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { CurrencyService } from "./currency.service";
import { RatesParam } from "./rates";
import { MaterialDialogComponent } from "../material-dialog.component";

@Component({
  selector: "app-calculator",
  templateUrl: "./calculator.component.html",
  styleUrls: ["./calculator.component.scss"]
})
export class CalculatorComponent {
  rates: Map<string, number> = new Map<string, number>();
  currencies: string[] = [];
  selectedCurrency: string = "THB";
  rate: number;
  converted: number;

  constructor(
    private cs: CurrencyService,
    public dialogRef: MatDialogRef<MaterialDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: RatesParam
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    let rates = this.cs.getRates().subscribe(data => {
      this.getCurrencies(data.rates);
      this.calculate();
    });
  }

  getCurrencies(rates: any) {
    Object.keys(rates).forEach(prop => {
      this.currencies.push(prop);
      this.rates.set(prop, rates[prop]);
    });
  }

  calculate() {
    this.rate = this.rates.get(this.selectedCurrency);
    this.converted = this.data.amount / this.rate;
  }

  getRate(curr: string): number {
    let rate = this.rates.get(curr);
    return rate;
  }
}
