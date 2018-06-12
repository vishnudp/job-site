import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-popular-categories-list-item',
  templateUrl: './popular-categories-list-item.component.html',
  styleUrls: ['./popular-categories-list-item.component.css']
})
export class PopularCategoriesListItemComponent implements OnInit {
  @Input() category;
  constructor() { }

  ngOnInit() {
  }

}
