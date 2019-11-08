import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageComponent } from './page/page.component';
import { TimelineComponent } from './timeline/timeline.component';
import { GalleryComponent } from './gallery/gallery.component';
import { InboxComponent } from './inbox/inbox.component';
import { EmailtemplateComponent } from './emailtemplate/emailtemplate.component';
import { MultilevelmenuComponent } from './multilevelmenu/multilevelmenu.component';


const routes: Routes = [

  { path: 'dashboard',      component: DashboardComponent },
  { path: 'page',   component: PageComponent },
  { path: 'timeline',     component: TimelineComponent },
  { path: 'gallery',          component: GalleryComponent },
  { path: 'inbox',           component: InboxComponent },
  { path: 'emailtemplate',  component: EmailtemplateComponent },
  { path: 'multilevelmenu',        component: MultilevelmenuComponent },
 
];
