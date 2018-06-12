import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG } from '../app.config';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  page_content  = {
  	page_description : '',
  	page_title : ''
  };
  constructor(private http : HttpClient) { }

  ngOnInit() {
  	this.http.post(APP_CONFIG.apiEndpoint + 'page.php?action=get_page_data', {'pageSlug': 'about-us'}).subscribe(
  		(res : { page_description : string, page_title : string }[]) => {
	  		if (typeof res === "object" && res.length)
	  			this.page_content = res[0];
  	})
  }

}
