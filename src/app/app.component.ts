import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  subTitle = $localize`angular-i18n-l10-example`;
  currentDate = new Date();
}
