import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detalhe-insumo',
  templateUrl: './detalhe-insumo.component.html',
  styleUrls: ['./detalhe-insumo.component.css']
})
export class DetalheInsumoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DetalheInsumoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
   
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
