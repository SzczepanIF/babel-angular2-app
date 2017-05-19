import { Component } from '@angular/core';
import { routerTransitionRight } from '../../router.animations';

@Component({
  selector: 'home',
  templateUrl: './pages/home/home.html',
  animations: [routerTransitionRight()],
  host: {'[@routerTransitionRight]' : 'true'}
})

export class Home {
  constructor() {
    this.me = {
      name: 'Marcin Szczepańczyk',
      title: 'Professional Front-End Engineer',
      shortDescription: 'Fighting on Front for over a decade!'
    }

    this.links = [{
      label: 'Projects',
      href: '/projects'
    }, {
      label: 'Companies',
      href: '/companies'
    }, {
      label: 'Contact',
      href: '/contact'
    }]
  }
}
