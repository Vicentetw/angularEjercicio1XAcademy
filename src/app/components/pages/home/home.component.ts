import { Component } from '@angular/core';
import { List } from 'src/app/interface/list';
import { ListService } from 'src/app/services/list.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EditPriceComponent } from '../edit-price/edit-price.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  //imports: [MatButtonModule] // lo importo en app.module.ts
})
export class HomeComponent {
  title = 'angularEjercicio1XAcademy';
  lists: List[] = []; // Inicializo el arreglo vacío para poder compoilar;
  showList = true;
  editingList: List | null = null;
  newProduct: string = '';
  newCost: string = '';
  newPrice: string = '';

  constructor(private listService: ListService, private snackBar: MatSnackBar , private dialog: MatDialog) {
    this.lists = listService.getList();
  }


  mostrarList(): void {
    this.showList = !this.showList;
  }
  getTotalCost(): string {
    let total = 0;
    for (const list of this.lists) {
      const costNumber = parseFloat(list.cost.substring(1));
      if (!isNaN(costNumber)) {
        total += costNumber;
      }
    }
    return `$${total.toFixed(2)}`;
  }

  openEditDialog(list: List): void {
    const dialogRef: MatDialogRef<EditPriceComponent> = this.dialog.open(EditPriceComponent, {
      data: {price: list.cost , productName: list.product}
    });
    dialogRef.afterClosed().subscribe(newPrice => {
      if (newPrice) {
        list.cost = newPrice;
        // Realizar acciones adicionales después de editar el precio, si es necesario
      }
    });
  }


  
  deleteList(list: List): void {
    this.listService.deleteList(list);
  }



  /*addList(): void {
    if (this.newProduct && this.newCost) {
      const newList: List = {
        product: this.newProduct,
        cost: this.newCost
      };
      this.listService.addList(newList);
      this.newProduct = '';
      this.newCost = '';
    }
  }
  */


  addList(): void {
    if (this.newProduct && this.newCost) {
      const costNumber = parseFloat(this.newCost); // convertir a numero
      if (!isNaN(costNumber)) {
        const newList: List = {
          product: this.newProduct,
          cost: `$${costNumber.toFixed(2)}` // Agrego el símbolo de dólar al guardar el costo
        };
        this.listService.addList(newList);
        this.lists = this.listService.getList();
        this.newProduct = '';
        this.newCost = ''; // restablezco el costo a vacìo
      } else {
        this.snackBar.open('El costo debe ser un número válido', 'Cerrar', {
          duration: 3000 // lo muestro 3 seguntos
        });
      }
    }
  }
  saveEdit(): void {
    if (this.editingList) {
      const newCost = `$${this.newPrice}`;
      this.editingList.cost = newCost;
      this.listService.updateList(this.editingList); // Método para actualizar la lista en el servicio
      this.editingList = null;
    }
  }

  cancelEdit(): void {
    this.editingList = null;
  }
}



