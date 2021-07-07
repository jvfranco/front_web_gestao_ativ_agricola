import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Maquina } from 'src/app/maquina/models';

@Component({
  selector: 'app-detalhe-maquina',
  templateUrl: './detalhe-maquina.component.html',
  styleUrls: ['./detalhe-maquina.component.css']
})
export class DetalheMaquinaComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DetalheMaquinaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
   
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
