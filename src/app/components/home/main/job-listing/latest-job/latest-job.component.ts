import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../../services/common.service';

@Component({
  selector: 'app-latest-job',
  templateUrl: './latest-job.component.html',
  styleUrls: ['./latest-job.component.css']
})
export class LatestJobComponent implements OnInit {
  totalMatchJobs = 0;
  jobList = [];
  subscriberArr = [];
  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.search();
  }

  public search() {
    this.subscriberArr.push(
      this.commonService.getJobs(this.commonService.searchFilterObject)
      .subscribe(
        (res: searchResultModel) => {
          // Dummy purpose
          res = {
            totalMatchJobs : 24,
            jobs : [
                  {
                    img_src : "envato.svg",
                    job_title : "php senior developer",
                    company_name : "envato",
                    location : "Melbourn, Australia",
                    job_type : "full time"
                  },
                  {
                    img_src : "google.svg",
                    job_title : "department head",
                    company_name : "google",
                    location : "berlin, germany",
                    job_type : "part time"
                  },
                  {
                    img_src : "facebook.svg",
                    job_title : "graphic designer",
                    company_name : "facebook",
                    location : "london, UK",
                    job_type : "freelancer"
                  },
                  {
                    img_src : "envato.svg",
                    job_title : "php senior developer",
                    company_name : "envato",
                    location : "Melbourn, Australia",
                    job_type : "full time"
                  },
                  {
                    img_src : "google.svg",
                    job_title : "department head",
                    company_name : "google",
                    location : "berlin, germany",
                    job_type : "part time"
                  }
                ]
          }
          this.totalMatchJobs = res.totalMatchJobs;
          this.jobList = res.jobs;
        }
      )
    )
  }

  changeFilter(data) {
    console.log("changeFilter", data);
    this.jobList = [
                  {
                    img_src : "envato.svg",
                    job_title : "php senior developer",
                    company_name : "envato",
                    location : "Melbourn, Australia",
                    job_type : "full time"
                  },
                  {
                    img_src : "google.svg",
                    job_title : "department head",
                    company_name : "google",
                    location : "berlin, germany",
                    job_type : "part time"
                  }
                ]
  }
}

class searchResultModel {
  totalMatchJobs : number;
  jobs : object[]
}