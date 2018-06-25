import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { CommonService } from '../../../../services/common.service';

declare var jQuery: any;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  subscriberArr = [];
  categoryData  = [];
  searchForm: object = {};
  constructor(private commonService : CommonService) { }

  ngOnInit() {
  	//Reference - https://github.com/silviomoreto/bootstrap-select/issues/1806
  	jQuery('.selectpicker').selectpicker({
    });
  }

  private getCategory() {
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

  search() {

  }

  ngOnDestroy() {
  	for(const sub of this.subscriberArr) sub.unsubscribe();
  }

}
