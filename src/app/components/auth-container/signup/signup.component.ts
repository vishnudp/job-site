import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonService } from '../../../services/common.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('f') signUpForm : NgForm;
  loading: boolean = false;
  countryData = [];
  stateData = [];
  constructor(private commonService : CommonService) { }

  ngOnInit() {
    this.getCountryData();
  }

  signup() {
    console.log("this.signUpForm",this.signUpForm.value);
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
    this.signUpForm.controls.stateId.setValue('');
    this.commonService.getStateData(countryId).subscribe(
      (res: Object[]) => {
        if (this.commonService.isObject(res) && res.length)
          this.stateData = res;
      }
    );
  }

}
