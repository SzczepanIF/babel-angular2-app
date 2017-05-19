import { Component } from '@angular/core';
import { routerTransitionLeft } from '../../router.animations';

@Component({
  selector: 'projects',
  templateUrl: './pages/projects/projects.html',
  animations: [routerTransitionLeft()],
  host: {'[@routerTransitionLeft]' : 'true'}
})

export class Projects {
  constructor() {
    this.paragraph = 'Lorem ipsum dolor sit amet'
  }
}
