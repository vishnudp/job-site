import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
    AuthService,
    FacebookLoginProvider,
    GoogleLoginProvider
} from 'angular5-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm : NgForm;
  loading : boolean = false;

  constructor(private socialAuthService: AuthService) { }

  ngOnInit() {
  }

  login(socialPlatform?) {
  	this.loading = true;
  	let socialPlatformProvider;
  	if (socialPlatform) {
	    if (socialPlatform == "facebook") socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
	    else if (socialPlatform == "google") socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
	    
	    this.socialAuthService.signIn(socialPlatformProvider).then((userData) => {
	    	console.log(socialPlatform+" sign in data : " , userData);
  			this.loading = false;
	    }, (err) => {
	    	console.log(socialPlatform + " error : ", err);
  			this.loading = false;
	    });
  	}
  	else {
  		// Login Manually
  	}
  }

}
