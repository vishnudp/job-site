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
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/home/header/header.component';
import { LogoComponent } from './components/home/header/logo/logo.component';
import { MenuComponent } from './components/home/header/menu/menu.component';
import { SearchComponent } from './components/home/main/search/search.component';
import { PopularCategoriesComponent } from './components/home/main/popular-categories/popular-categories.component';
import { PopularCategoriesListComponent } from './components/home/main/popular-categories/popular-categories-list/popular-categories-list.component';
import { PopularCategoriesListItemComponent } from './components/home/main/popular-categories/popular-categories-list/popular-categories-list-item/popular-categories-list-item.component';
import { JobListingComponent } from './components/home/main/job-listing/job-listing.component';
import { LatestJobComponent } from './components/home/main/job-listing/latest-job/latest-job.component';
import { LatestJobListComponent } from './components/home/main/job-listing/latest-job/latest-job-list/latest-job-list.component';
import { LatestJobListItemComponent } from './components/home/main/job-listing/latest-job/latest-job-list/latest-job-list-item/latest-job-list-item.component';
import { GoldenJobComponent } from './components/home/main/job-listing/golden-job/golden-job.component';
import { GoldenJobListComponent } from './components/home/main/job-listing/golden-job/golden-job-list/golden-job-list.component';
import { GoldenJobListItemComponent } from './components/home/main/job-listing/golden-job/golden-job-list/golden-job-list-item/golden-job-list-item.component';
import { CounterComponent } from './components/home/main/counter/counter.component';
import { TestimonialsComponent } from './components/home/main/testimonials/testimonials.component';
import { SponsorComponent } from './components/home/main/sponsor/sponsor.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { NewsletterComponent } from './components/home/footer/newsletter/newsletter.component';
import { PopularPostsComponent } from './components/home/footer/popular-posts/popular-posts.component';
import { UsefulLinksComponent } from './components/home/footer/useful-links/useful-links.component';
import { ContactComponent } from './components/home/footer/contact/contact.component';
import { CopyrightComponent } from './components/home/footer/copyright/copyright.component';

import { LoginComponent } from './components/auth-container/login/login.component';
import { SignupComponent } from './components/auth-container/signup/signup.component';
import { MainComponent } from './components/home/main/main.component';
import { JobPageComponent } from './components/job-page/job-page.component';
import { CompanyPageComponent } from './components/company-page/company-page.component';
import { AboutUsComponent } from './components/static-pages/about-us/about-us.component';
import { ContactUsComponent } from './components/static-pages/contact-us/contact-us.component';
import { PrivacyPolicyComponent } from './components/static-pages/privacy-policy/privacy-policy.component';
import { TermsConditionComponent } from './components/static-pages/terms-condition/terms-condition.component';
import { SearchJobComponent } from './components/search-job/search-job.component';

/***Reusable Components***/
import { PaginatorComponent } from './components/paginator/paginator.component';

/***Routing module***/
import { AppRouting } from './app.routing';

/***Services***/
import { services } from './services/index';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';

/***Configs***/
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
    SearchJobComponent,
    PaginatorComponent,
    SearchFilterComponent,
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
  bootstrap: [AppComponent]
})
export class AppModule { }
