import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG } from '../app.config';

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
  
  constructor(private http : HttpClient) { }

  ngOnInit() {
    this.subscriberArr.push(
      this.http.post(APP_CONFIG.apiEndpoint + 'page.php?action=get_page_data', {
        'pageSlug': 'contact-us'
      })
      .subscribe(
        (res : { page_description : string, page_title : string }[]) => {
          if (typeof res === "object" && res.length)
            this.page_content = res[0];
        }
      )
    )
  }

  ngOnDestroy() {
    for(const sub of this.subscriberArr) sub.unsunscribe();
  }

}
