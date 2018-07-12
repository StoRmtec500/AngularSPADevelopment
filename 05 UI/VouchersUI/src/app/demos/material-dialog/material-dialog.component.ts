import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSelect } from '@angular/material';
import { CalculatorComponent } from '../../shared/calculator/calculator.component';

@Component({
  selector: 'app-material-dialog',
  templateUrl: './material-dialog.component.html',
  styleUrls: ['./material-dialog.component.scss']
})
export class MaterialDialogComponent implements OnInit {

  ngOnInit(): void {
    
  }

  amount: number = 100;
  name: string;
  calculated: boolean = false;
  msg: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(CalculatorComponent, {
      width: '250px',
      data: { 'name': "Customer", 'amount': this.amount }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.msg = `Thank you for exchanging ${result} €`
      this.calculated = true;
    });
  }

}
