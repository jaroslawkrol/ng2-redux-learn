import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";
import {TableService} from "../../service/table.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {

  @Input() items: any[]
  @Input() action: any;

  private list:TableService;

  constructor(list: TableService) {
    this.list = list;
  }

}
