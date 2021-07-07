import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Marca } from 'src/app/marca/models';

@Component({
  selector: 'app-detalhe-marca',
  templateUrl: './detalhe-marca.component.html',
  styleUrls: ['./detalhe-marca.component.css']
})
export class DetalheMarcaComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DetalheMarcaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Marca) {}

  ngOnInit(): void {
   
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
