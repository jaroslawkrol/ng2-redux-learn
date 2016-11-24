import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";
import {TableService} from "../../service/table.service";
import {Product} from "../../model/product";
import {IDLE} from "../../reducers/table.reducer";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {

  @Input() items: Product[];
  @Input() action: string;
  @Input() filters: any;
  @Input() sortColumn: string;
  @Input() sortAsc: boolean;

  private IDLE: string = IDLE;

  private columns:any[] = [
    {name: 'image', 'header': 'Obrazek', sortable: false},
    {name: 'name', 'header': 'Nazwa produktu', sortable: true},
    {name: 'price', 'header': 'Nazwa produktu', sortable: true},
    {name: 'quality', 'header': 'Nazwa produktu', sortable: true},
    {name: 'quantity', 'header': 'Nazwa produktu', sortable: true},
  ];

  private list:TableService;

  constructor(list: TableService) {
    this.list = list;
  }

}
