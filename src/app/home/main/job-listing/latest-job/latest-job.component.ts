import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-job',
  templateUrl: './latest-job.component.html',
  styleUrls: ['./latest-job.component.css']
})
export class LatestJobComponent implements OnInit {
  selectedPage : number;
  list = [];
  totalLatestJobs : number;
  totalPages : number;
  showPages = [];
  pageSize : number = 5;
  startPage : number = 0;
  showNext : boolean = false;
  constructor() { }

  ngOnInit() {
  	this.list = [
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
  			job_title : "senior UI & UX designer",
  			company_name : "envato",
  			location : "Melbourn, Australia",
  			job_type : "intership"
  		},
  		{
  			img_src : "twitter.svg",
  			job_title : "senior health advisor",
  			company_name : "twitter",
  			location : "New York, USA",
  			job_type : "temporary"
  		}
  	]
  	this.totalLatestJobs = 195;
  	this.totalPages = Math.ceil(this.totalLatestJobs/this.pageSize);
  	this.next();
  }

  next() {
  	this.showPages = [];
  	for(var i=0; i<4 && this.startPage < this.totalPages; i++) {
  		this.startPage++;
  		this.showPages.push(this.startPage);
  	}
  	this.showNext = this.startPage < this.totalPages;
  	this.selectedPage = this.showPages[0];
  }

  pre() {
  	this.startPage = this.showPages[0] - 4 - 1;
  	this.next();
  }
}
