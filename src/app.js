
import { NgModule, Component, Input, Attribute, trigger, state, animate, style, transition  } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpModule} from '@angular/http';
import 'rxjs/add/operator/map';

//import { NextRacesService } from './services';

import { MyCvHeader } from './components/header/header';
import { MyCvFooter } from './components/footer/footer';
import { Home } from './pages/home/home';
import { Projects } from './pages/projects/projects';
import { Companies } from './pages/companies/companies';
import { Contact } from './pages/contact/contact';
//import { RbIndex } from './components/index/index';

//import { RaceTypePipe } from './pipes/race-type-pipe';

//import { NextRaces } from './components/next-races/next-races';

@Component({
  selector: 'my-cv-app',
  templateUrl: 'layouts/main.html'
})

export class MyCvApp {}

const routing = RouterModule.forRoot([
  { path: '', component: Home },
  { path: 'projects', component: Projects },
  { path: 'companies', component: Companies },
  { path: 'contact', component: Contact }
]);

@NgModule({
  imports: [
    BrowserModule,
    routing,
    HttpModule
  ],
  declarations: [
    MyCvApp,
    MyCvHeader,
    MyCvFooter,
    Home,
    Projects,
    Contact,
    Companies
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [MyCvApp],
})
export class AppModule {}
