import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/home/main/main.component';
import { JobPageComponent } from './components/job-page/job-page.component';
import { CompanyPageComponent } from './components/company-page/company-page.component';
import { AboutUsComponent } from './components/static-pages/about-us/about-us.component';
import { PrivacyPolicyComponent } from './components/static-pages/privacy-policy/privacy-policy.component';
import { TermsConditionComponent } from './components/static-pages/terms-condition/terms-condition.component';
import { ContactUsComponent } from './components/static-pages/contact-us/contact-us.component';
import { SearchJobComponent } from './components/search-job/search-job.component';


let routes : Routes = [
	{path : '', component : HomeComponent, children : [
		{path : '', component : MainComponent},
		{path : 'job-page', component : JobPageComponent},
		{path : 'company-page', component : CompanyPageComponent},
		{path : 'about-us', component : AboutUsComponent},
		{path : 'privacy-policy', component : PrivacyPolicyComponent},
		{path : 'terms-condition', component : TermsConditionComponent},
		{path : 'contact-us', component : ContactUsComponent},
		{path : 'search-job', component : SearchJobComponent},
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