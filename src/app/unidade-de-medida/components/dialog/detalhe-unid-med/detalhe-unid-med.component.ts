import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UnidadeDeMedida } from 'src/app/unidade-de-medida/models';
import { UnidadeDeMedidaService } from 'src/app/unidade-de-medida/services';

@Component({
  selector: 'app-detalhe-unid-med',
  templateUrl: './detalhe-unid-med.component.html',
  styleUrls: ['./detalhe-unid-med.component.css']
})
export class DetalheUnidMedComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DetalheUnidMedComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UnidadeDeMedida) {}

  ngOnInit(): void {
   
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
