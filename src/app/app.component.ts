import { Component } from '@angular/core';
import {StoreService} from "../store.service";
import {TableService} from "../service/table.service";
import {NEW, EDITING, VIEWING, IDLE } from "../reducers/table.reducer";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private store: StoreService;
  private list: TableService;

  private headers:any[] = [];

  constructor(store: StoreService, list: TableService) {
    this.store = store;
    this.list  = list;

    this.headers[NEW] = 'Dodaj produkt';
    this.headers[EDITING] = 'Edycja produktu';
    this.headers[VIEWING] = 'Podgląd produktu';
    this.headers[IDLE] = 'Lista produktów';


    list.loadTable();
  }
}
