import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonService } from '../services/common.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('f') loginForm : NgForm;
  loading : boolean = false;
  countryData = [];
  stateData = [];
  model: any = {};
  constructor(private commonService : CommonService) { }

  ngOnInit() {
  }

  signup() {
    console.log("this.loginForm",this.loginForm);
  }

  getCountryData() {
    this.commonService.getCountryData().subscribe(
      (res: Object[]) => {
        if (this.commonService.isObject(res) && res.length)
          this.countryData = res;
      }
    );
  }

  getStateData(countryId) {
    this.commonService.getStateData(countryId).subscribe(
      (res: Object[]) => {
        if (this.commonService.isObject(res) && res.length)
          this.stateData = res;
      }
    );
  }

}
