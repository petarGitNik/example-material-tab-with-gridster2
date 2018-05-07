import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public onChange(event, ...tabComponents): void {
    for (let tab of tabComponents) {
      tab.options.api.resize();
    }
  }

}
