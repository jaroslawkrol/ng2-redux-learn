import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {TableService} from "../../service/table.service";
import {Input} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  @Input() item: any;
  @Input() action: any;

  private list:TableService;

  constructor(list: TableService) {
    this.list = list;
  }

}
