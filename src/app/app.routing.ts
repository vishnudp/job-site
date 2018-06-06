import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MainComponent } from './home/main/main.component';
import { JobPageComponent } from './job-page/job-page.component';
import { CompanyPageComponent } from './company-page/company-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


let routes : Routes = [
	{path : '', component : HomeComponent, children : [
		{path : '', component : MainComponent},
		{path : 'job-page', component : JobPageComponent},
		{path : 'company-page', component : CompanyPageComponent},
		{path : 'about-us', component : AboutUsComponent},
		{path : 'privacy-policy', component : PrivacyPolicyComponent},
		{path : 'terms-condition', component : TermsConditionComponent},
		{path : 'contact-us', component : ContactUsComponent},
	]},
	//{path : 'login', component : LoginComponent, resolve : {loginResolver : LoginResolver}},
	{path : '**', redirectTo : '' }
]
@NgModule({
	declarations : [],
	imports : [RouterModule.forRoot(routes, {useHash:true})],
	exports : [RouterModule]
})
export class AppRouting {

}