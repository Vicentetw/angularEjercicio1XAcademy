import { Injectable } from '@angular/core';
import { List } from '../interface/list';
@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }
  private lists: List[]
  =[
    {product: 'Producto 1', cost: '$10'},
    {product: 'Producto 2', cost: '$10'},
    {product: 'Producto 3', cost: '$10'}
  ];
   /*
   getList(): List[]{
    return this.lists;
   }
   */
   getList(): List[] {
    return this.lists;
  }
   getIndex(list: List): number {
    return this.lists.indexOf(list);
   }
   deleteList(list: List): void {
    const index = this.getIndex(list);
    if (index !== -1) {
      this.lists.splice(index, 1);
    }
  }
  addList(list: List): void {
    this.lists.push(list);
  }
  updateList(list: List): void {
    const index = this.getIndex(list);
    if (index !== -1) {
      this.lists[index] = list;
    }
  }
}
