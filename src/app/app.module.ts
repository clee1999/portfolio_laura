import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectComponent } from './main/project/project.component';
import { AboutComponent } from './main/about/about.component';
import { SkillsComponent } from './main/skills/skills.component';
import { CareerComponent } from './main/career/career.component';
import { ContactComponent } from './main/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ProjectComponent,
    AboutComponent,
    SkillsComponent,
    CareerComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
