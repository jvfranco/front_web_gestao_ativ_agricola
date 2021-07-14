import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detalhe-talhao',
  templateUrl: './detalhe-talhao.component.html',
  styleUrls: ['./detalhe-talhao.component.css']
})
export class DetalheTalhaoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DetalheTalhaoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
   
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
