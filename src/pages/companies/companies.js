import { Component } from '@angular/core';
import { routerTransitionLeft } from '../../router.animations';

@Component({
  selector: 'projects',
  templateUrl: './pages/companies/companies.html',
  animations: [routerTransitionLeft()],
  host: {'[@routerTransitionLeft]' : 'true'}
})

export class Companies {
  constructor() {

  }
}
