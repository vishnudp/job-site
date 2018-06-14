import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG } from '../../../app.config';

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.css']
})
export class SponsorComponent implements OnInit, OnDestroy {
  sponsorList = [];
  subscriberArr = [];

  constructor(private http : HttpClient) { }

  ngOnInit() {
    this.subscriberArr.push(
      this.http.get(APP_CONFIG.apiEndpoint + 'sponsor.php?action=get_sponsor_data')
      .subscribe(
        (res : {}[]) => {
          this.sponsorList = res || [];
        }
      )
    )
  }

  ngOnDestroy() {
    for(const sub of this.subscriberArr) sub.unsubscribe();
  }
  
}
