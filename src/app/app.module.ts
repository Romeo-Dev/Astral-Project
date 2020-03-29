import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FooterComponent } from './footer/footer.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageWorkComponent } from './page-work/page-work.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PageSkillComponent } from './page-skill/page-skill.component';
import { PageDummyComponent } from './page-dummy/page-dummy.component';
import { DetailWorkComponent } from './detail-work/detail-work.component';
import { DetailProfileComponent } from './detail-profile/detail-profile.component';
import { SelectTecComponent } from './select-tec/select-tec.component';
import { SelectProjectComponent } from './select-project/select-project.component';

const appRoutes: Routes = [
  { path: '', component: PageHomeComponent },
  { path: 'works', component: PageWorkComponent },
  { path: 'contact', component: PageContactComponent },
  { path: 'skills', component: PageSkillComponent },
  { path: 'works/:id', component: DetailWorkComponent },
  { path: 'dummy', component: PageDummyComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    FooterComponent,
    PageHomeComponent,
    PageWorkComponent,
    PageContactComponent,
    PageSkillComponent,
    PageDummyComponent,
    DetailWorkComponent,
    DetailProfileComponent,
    SelectTecComponent,
    SelectProjectComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
