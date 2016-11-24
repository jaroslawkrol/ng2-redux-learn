import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {TableService} from "../../service/table.service";
import {Input} from "@angular/core/src/metadata/directives";
import {NEW,EDITING,VIEWING} from "../../reducers/table.reducer";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  @Input() item: any;
  @Input() action: any;

  NEW: string = NEW;
  EDITING: string = EDITING;
  VIEWING: string = VIEWING;

  private list:TableService;

  constructor(list: TableService) {
    this.list = list;
  }

}
