import { Component } from '@angular/core';
import { routerTransitionLeft } from '../../router.animations';

@Component({
  selector: 'projects',
  templateUrl: './pages/contact/contact.html',
  animations: [routerTransitionLeft()],
  host: {'[@routerTransitionLeft]' : 'true'}
})

export class Contact {
  constructor() {

  }
}
