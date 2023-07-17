import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-edit-price',
  //templateUrl: './edit-price.component.html',
  template: `
  <mat-card>
      <mat-card-header>
        <mat-card-title class="mat-primary mat-card-title-align">Editar precio de: {{ productName }}</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <form (ngSubmit)="savePrice()">
          <mat-form-field>
            <input matInput type="number" placeholder="Nuevo precio" [(ngModel)]="newPrice" name="newPrice">
          </mat-form-field>
          <div class="button-container">
          <button mat-raised-button color="primary" type="submit">Guardar</button>
          <button mat-button mat-dialog-close>Cancelar</button>
          </div>
        </form>
      </mat-card-content>
    </mat-card>
`,
  styleUrls: ['./edit-price.component.css'],
})

export class EditPriceComponent {
newPrice!: string;
productName: string;

constructor(
    private dialogRef: MatDialogRef<EditPriceComponent>,
    @Inject(MAT_DIALOG_DATA) private data: {price: string , productName: string},
    private snackBar: MatSnackBar
  )
  {
   // this.newPrice = parseFloat(data.price.substring(1)); // Convierto el precio a número
   this.newPrice = data.price;
   this.productName = data.productName;
  }

  savePrice(): void {
    if (!isNaN(parseFloat(this.newPrice))) {
      this.dialogRef.close(`$${parseFloat(this.newPrice).toFixed(2)}`);
    } else {
      this.snackBar.open('Ingrese solo números', 'Cerrar', {
        duration: 3000
      });
    }
  }
}