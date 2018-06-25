import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonRequestResponseService } from '../../../../services/common-request-response.service';

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.css']
})
export class SponsorComponent implements OnInit, OnDestroy {
  sponsorList = [];
  subscriberArr = [];

  constructor(private commonRequestResponseService : CommonRequestResponseService) { }

  ngOnInit() {
    this.subscriberArr.push(
      this.commonRequestResponseService.get('sponsor.php?action=get_sponsor_data')
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
