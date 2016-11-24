import { Component, OnInit } from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";
import {TableService} from "../../service/table.service";

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css'],

})
export class TableRowComponent {
  @Input() item: any;

  private list:TableService;

  constructor(list: TableService) {
    this.list = list;
  }

}
