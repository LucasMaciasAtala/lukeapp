import * as moment from 'moment';
import { Component, OnInit, Input, Output, EventEmitter, ModuleWithComponentFactories } from '@angular/core';
import { IPenality } from '../../types/penality'

@Component({
  selector: 'admin-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  @Input() dataSource = [];
  @Input() displayedColumns = [];
  @Output() editItem = new EventEmitter<IPenality>();
  @Output() removeItem = new EventEmitter<IPenality>();

  constructor() {}

  ngOnInit() {}

  editItemHandle(data: IPenality) {
    this.editItem.emit(data);
  }

  cancelItemHandle(data: IPenality) {
    this.removeItem.emit(data);
  }

  getDateHumanized(date: number) {
    return moment.duration(date, 'days').humanize();
  }
}
