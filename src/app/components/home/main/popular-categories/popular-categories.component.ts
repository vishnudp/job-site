import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonService } from '../../../../services/common.service';

@Component({
  selector: 'app-popular-categories',
  templateUrl: './popular-categories.component.html',
  styleUrls: ['./popular-categories.component.css']
})
export class PopularCategoriesComponent implements OnInit, OnDestroy {
  subscriberArr = [];
  categoryData  = [];
  constructor(private commonService : CommonService) { }

  ngOnInit() {
  	this.subscriberArr.push(
  		this.commonService.getCategoryData()
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
  	for(const sub of this.subscriberArr) sub.unsubscribe();
  }

}
