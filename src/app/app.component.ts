import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learn-angular-app';
  toggleSidebar: boolean = false;

  openToggle(){
    return this.toggleSidebar;
  } 

  onClickToggleSidebar() {
    this.toggleSidebar = !this.toggleSidebar;
  }
}
