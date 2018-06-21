import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {
    SocialLoginModule,
    AuthServiceConfig,
    GoogleLoginProvider,
    FacebookLoginProvider,
} from "angular5-social-login";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { LogoComponent } from './home/header/logo/logo.component';
import { MenuComponent } from './home/header/menu/menu.component';
import { SearchComponent } from './home/main/search/search.component';
import { PopularCategoriesComponent } from './home/main/popular-categories/popular-categories.component';
import { PopularCategoriesListComponent } from './home/main/popular-categories/popular-categories-list/popular-categories-list.component';
import { PopularCategoriesListItemComponent } from './home/main/popular-categories/popular-categories-list/popular-categories-list-item/popular-categories-list-item.component';
import { JobListingComponent } from './home/main/job-listing/job-listing.component';
import { LatestJobComponent } from './home/main/job-listing/latest-job/latest-job.component';
import { LatestJobListComponent } from './home/main/job-listing/latest-job/latest-job-list/latest-job-list.component';
import { LatestJobListItemComponent } from './home/main/job-listing/latest-job/latest-job-list/latest-job-list-item/latest-job-list-item.component';
import { GoldenJobComponent } from './home/main/job-listing/golden-job/golden-job.component';
import { GoldenJobListComponent } from './home/main/job-listing/golden-job/golden-job-list/golden-job-list.component';
import { GoldenJobListItemComponent } from './home/main/job-listing/golden-job/golden-job-list/golden-job-list-item/golden-job-list-item.component';
import { CounterComponent } from './home/main/counter/counter.component';
import { TestimonialsComponent } from './home/main/testimonials/testimonials.component';
import { SponsorComponent } from './home/main/sponsor/sponsor.component';
import { FooterComponent } from './home/footer/footer.component';
import { NewsletterComponent } from './home/footer/newsletter/newsletter.component';
import { PopularPostsComponent } from './home/footer/popular-posts/popular-posts.component';
import { UsefulLinksComponent } from './home/footer/useful-links/useful-links.component';
import { ContactComponent } from './home/footer/contact/contact.component';
import { CopyrightComponent } from './home/footer/copyright/copyright.component';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MainComponent } from './home/main/main.component';
import { JobPageComponent } from './job-page/job-page.component';
import { CompanyPageComponent } from './company-page/company-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';

import { AppRouting } from './app.routing';


/****
  Services
  ****/
import { services } from './services/index';
// Configs 
export function getAuthServiceConfigs    () {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("1212193112249958")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("565466113599-607qd3kes0f16084iolb9kn4bbp0as6u.apps.googleusercontent.com")
        },
      ]
  );
  return config;
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LogoComponent,
    MenuComponent,
    SearchComponent,
    PopularCategoriesComponent,
    PopularCategoriesListComponent,
    PopularCategoriesListItemComponent,
    JobListingComponent,
    LatestJobComponent,
    LatestJobListComponent,
    LatestJobListItemComponent,
    GoldenJobComponent,
    GoldenJobListComponent,
    GoldenJobListItemComponent,
    CounterComponent,
    TestimonialsComponent,
    SponsorComponent,
    FooterComponent,
    NewsletterComponent,
    PopularPostsComponent,
    UsefulLinksComponent,
    ContactComponent,
    CopyrightComponent,
    LoginComponent,
    SignupComponent,
    MainComponent,
    JobPageComponent,
    CompanyPageComponent,
    AboutUsComponent,
    ContactUsComponent,
    PrivacyPolicyComponent,
    TermsConditionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRouting,
    SocialLoginModule,
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs    
    },
    ...services
  ],
  bootstrap: [AppComponent],
  /*entryComponents: [LoginComponent]*/
})
export class AppModule { }
