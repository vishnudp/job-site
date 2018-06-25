import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-popular-categories-list',
  templateUrl: './popular-categories-list.component.html',
  styleUrls: ['./popular-categories-list.component.css']
})
export class PopularCategoriesListComponent implements OnInit {
  @Input() categoryList;
  constructor() { }

  ngOnInit() {
  }

}
