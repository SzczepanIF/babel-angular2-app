import { Component } from '@angular/core';

@Component({
  selector: 'my-cv-footer',
  templateUrl: './components/footer/footer.html'
})

export class MyCvFooter{
  constructor() {
    this.footerText = 'Copyright @ 2017 Marcin Szczepańczyk'
  }
}
