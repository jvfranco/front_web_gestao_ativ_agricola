import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detalhe-propriedade',
  templateUrl: './detalhe-propriedade.component.html',
  styleUrls: ['./detalhe-propriedade.component.css']
})
export class DetalhePropriedadeComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DetalhePropriedadeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
   
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
