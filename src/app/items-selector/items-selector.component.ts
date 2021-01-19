import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ItemsService } from '../services/items.service';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'items-selector',
  templateUrl: './items-selector.component.html',
  styleUrls: ['./items-selector.component.css']
})
export class ItemsSelectorComponent implements OnInit {
  groupedItems: Object;
  baseImagePath: string;

  @Output() itemClickedEvent = new EventEmitter();

  constructor(
    private itemsService: ItemsService,
    private config: ConfigService) { 
      this.baseImagePath = this.config.base_url + "/storage/";
    }

  ngOnInit() {
    this.itemsService.getItems(0, true)
      .subscribe(groupedItems => {
        this.groupedItems = groupedItems;
      })
  }

  itemClicked(item) {
    this.itemClickedEvent.emit(item);
  }

}
