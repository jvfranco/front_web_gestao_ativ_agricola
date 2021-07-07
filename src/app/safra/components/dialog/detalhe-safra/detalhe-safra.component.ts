import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Safra } from 'src/app/safra/models';

@Component({
  selector: 'app-detalhe-safra',
  templateUrl: './detalhe-safra.component.html',
  styleUrls: ['./detalhe-safra.component.css']
})
export class DetalheSafraComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DetalheSafraComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Safra) {}

  ngOnInit(): void {
   
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
