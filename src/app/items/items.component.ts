import { Component, OnInit } from '@angular/core';
import { item } from '../types/item';
import { itemsService } from './items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class itemsComponent implements OnInit {
  items: item[] = [];
  constructor(private itemsService: itemsService) {}

  isShowing: boolean = true;

  ngOnInit(): void {
    this.items = this.itemsService.getitems();
  }
}
