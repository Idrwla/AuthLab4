import { Component } from '@angular/core';
import {User} from './Shared/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  singInComponent = true;
  singUpComponent: boolean;
  detailsComponent: boolean;
  forgotPassComponent: boolean;
  currentUser: User;
  timeToChangePass: boolean;
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
  toChangePass(): void{
    setTimeout(() => {
      this.timeToChangePass = true;
      this.detailsComponent = false;
    }, 20000);
  }
  singed(event): void{
    this.currentUser = event;
    this.accepted = true;
    this.detailsComponent = true;
    this.singUpComponent = false;
    this.singInComponent = false;
    this.forgotPassComponent = false;
    this.toChangePass();
  }
  LogOut(): void{
    this.singInComponent = true;
    this.singUpComponent = false;
    this.forgotPassComponent = false;
    this.detailsComponent = false;
    this.currentUser = null;
    this.accepted = false;
  }
  forgotPass(): void{
    this.forgotPassComponent = true;
    this.singInComponent = false;
    this.singUpComponent = false;
    this.detailsComponent = false;
  }
}
