import { Component } from '@angular/core';
import {User} from './Shared/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  singInComponent: boolean;
  singUpComponent: boolean;
  detailsComponent: boolean;
  currentUser: User;
  accepted = false;
  title = 'AuthLab4';
  singInView(): void{
    this.singInComponent = true;
    this.singUpComponent = false;
    this.detailsComponent = false;
  }
  singUpView(): void{
    this.singUpComponent = true;
    this.singInComponent = false;
    this.detailsComponent = false;
  }
  detail(): void{
    if (this.currentUser != null){
      this.detailsComponent = true;
      this.singUpComponent = false;
      this.singInComponent = false;
    }
  }
  singed(event): void{
    this.currentUser = event;
    this.accepted = true;
  }
}
