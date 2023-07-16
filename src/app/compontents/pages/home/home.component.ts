import { Component } from '@angular/core';
import { List } from 'src/app/interface/list';
import { ListService } from 'src/app/services/list.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'angularEjercicio1XAcademy';
  lists!: List[];
  showList = true;

constructor(private listService: ListService){}
ngOnInit(){
  this.lists = this.listService.getList();
}
  mostrarList(): void {
    this.showList = !this.showList;
  }
  
}
