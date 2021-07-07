import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detalhe-cultura',
  templateUrl: './detalhe-cultura.component.html',
  styleUrls: ['./detalhe-cultura.component.css']
})
export class DetalheCulturaComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DetalheCulturaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
   
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
