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
    {product: 'Producto 1', cost: '$10'},
    {product: 'Producto 1', cost: '$10'}
  ];
   getList(): List[]{
    return this.lists;
   }
}
