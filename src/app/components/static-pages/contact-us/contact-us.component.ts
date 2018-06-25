import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonRequestResponseService } from '../../../services/common-request-response.service';
import { CommonService } from '../../../services/common.service';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})

export class ContactUsComponent implements OnInit, OnDestroy {
  page_content  = {
  	page_description : '',
  	page_title : ''
  };
  subscriberArr = [];
  
  constructor(
    private commonRequestResponseService: CommonRequestResponseService,
    private commonService: CommonService) { }

  ngOnInit() {
    this.subscriberArr.push(
      this.commonRequestResponseService.post('page.php?action=get_page_data', {
        'pageSlug': 'contact-us'
      })
      .subscribe(
        (res: {page_description : string, page_title : string}[]) => {
          if (this.commonService.isObject(res) && res.length)
            this.page_content = res[0];
        }
      )
    )
  }

  ngOnDestroy() {
    for(const sub of this.subscriberArr) sub.unsubscribe();
  }

}
