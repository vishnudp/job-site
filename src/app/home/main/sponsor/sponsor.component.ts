import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.css']
})
export class SponsorComponent implements OnInit {
  sponsorList = [];
  constructor() { }

  ngOnInit() {
  	this.sponsorList = [
  		{img_src : "themeforest.png"},
  		{img_src : "codecanyon.png"},
  		{img_src : "graphicriver.png"},
  		{img_src : "photodune.png"},
  		{img_src : "audiojungle.png"},
  	]
  }
  
}
