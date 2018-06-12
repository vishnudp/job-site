import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG } from '../../../app.config';

@Component({
  selector: 'app-popular-categories',
  templateUrl: './popular-categories.component.html',
  styleUrls: ['./popular-categories.component.css']
})
export class PopularCategoriesComponent implements OnInit, OnDestroy {
  subscriberArr = [];
  categoryData  = [];
  constructor(private http : HttpClient) { }

  ngOnInit() {
  	this.subscriberArr.push(
  		this.http.get(APP_CONFIG.apiEndpoint + 'category.php?action=get_category')
  		.subscribe(
	  		(res : {
					  	category_id : string|number,
						category_name : string,
						category_image : string,
						category_description : string
					}[]) => {
	  			this.categoryData = res || [];
	  		}
	  	)
  	)
  }

  ngOnDestroy() {
  	for(const sub of this.subscriberArr) sub.unsunscribe();
  }

}
