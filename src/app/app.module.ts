import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SectionsComponent } from './sections/sections.component';
import { ApplyComponent } from './apply/apply.component';
import { WorkshopsComponent } from './sections/workshops/workshops.component';
import { InternshipComponent } from './sections/internship/internship.component';
import { JobsComponent } from './sections/jobs/jobs.component';
import { MaterialModule } from './material/material.module';
import { WelcomeHeaderComponent } from './welcome-header/welcome-header.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionsComponent,
    ApplyComponent,
    WorkshopsComponent,
    InternshipComponent,
    JobsComponent,
    WelcomeHeaderComponent,
    TestimonialsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
