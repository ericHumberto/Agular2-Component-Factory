import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  componentId: number = 0;

  createComponent(componentId: number) {
    this.componentId = componentId;
    console.log(this.componentId);
  }
}
