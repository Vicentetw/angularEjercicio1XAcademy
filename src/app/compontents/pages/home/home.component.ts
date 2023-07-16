import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'angularEjercicio1XAcademy';
  list: List[] = [
    { name: 'Producto 1', cost: '$10' },
    { name: 'Producto 2', cost: '$20' },
    { name: 'Producto 3', cost: '$30' }
  ];
  showList = true;

  mostrarList(): void {
    this.showList = !this.showList;
  }
  getTotalCost(): string {
    let total = 0;
    for (const l of this.list) {
      const costNumber = parseFloat(l.cost.substring(1));
      total += costNumber;
    }
    return `$${total.toFixed(2)}`;
  }
}
