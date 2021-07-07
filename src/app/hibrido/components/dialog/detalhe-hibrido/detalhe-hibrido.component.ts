import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detalhe-hibrido',
  templateUrl: './detalhe-hibrido.component.html',
  styleUrls: ['./detalhe-hibrido.component.css']
})
export class DetalheHibridoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DetalheHibridoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
   
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
