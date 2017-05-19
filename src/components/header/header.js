import { Component } from '@angular/core';

@Component({
  selector: 'my-cv-header',
  templateUrl: './components/header/header.html'
})

export class MyCvHeader {
  constructor() {
    this.headerTitle = 'Marcin Szczepańczyk - Curriculum Vitae'
  }
}
