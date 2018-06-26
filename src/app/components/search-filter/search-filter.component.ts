import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../services/common.service';

declare var jQuery: any;

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit, OnDestroy {
  @Output('onSearch') onSearch = new EventEmitter<any>();
  subscriberArr = [];
  categoryData  = [];
  searchForm: object = {};
  constructor(
  	private commonService: CommonService,
  	private router: Router) { }

  ngOnInit() {
  	//Reference - https://github.com/silviomoreto/bootstrap-select/issues/1806
  	jQuery('.selectpicker').selectpicker({
    });

    if (this.router.url === '/search-job')
  		this.searchForm = this.commonService.searchFilterObject;

    this.getCategory();
  }

  private getCategory() {
  	this.subscriberArr.push(
  		this.commonService.getCategoryData()
  		.subscribe(
	  		(res: object[]) => {
	  			this.categoryData = res || [];
	  			//Reference - https://stackoverflow.com/questions/43565331/angular-2-bootstrap-selectpicker-dynamic-data-and-ngfor
	  			setTimeout(()=> {
	  				jQuery('.selectpicker').selectpicker('refresh');
	  			},100)
	  		}
	  	)
  	)
  }

  search() {
  	this.commonService.searchFilterObject = this.searchForm;
  	if (this.router.url === '/')
  		this.router.navigate(['search-job']);
  	else
  		this.onSearch.next();
  }

  ngOnDestroy() {
  	for(const sub of this.subscriberArr) sub.unsubscribe();
  }

}
