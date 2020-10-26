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
    this.timeToChangePass = false;
  }
  singUpView(): void{
    this.singUpComponent = true;
    this.singInComponent = false;
    this.detailsComponent = false;
    this.timeToChangePass = false;
  }
  detail(): void{
    if (this.currentUser != null){
      this.detailsComponent = true;
      this.singUpComponent = false;
      this.singInComponent = false;
      this.timeToChangePass = false;
    }
  }
  toChangePass(): void{
    if (this.currentUser !== null){
      setTimeout(() => {
        this.timeToChangePass = true;
        this.detailsComponent = false;
        this.singUpComponent = false;
        this.singInComponent = false;
        this.forgotPassComponent = false;
      }, 20000);
    }
  }
  singed(event): void{
    this.currentUser = event;
    this.accepted = true;
    this.detailsComponent = true;
    this.singUpComponent = false;
    this.singInComponent = false;
    this.forgotPassComponent = false;
    this.timeToChangePass = false;
    this.toChangePass();
  }
  LogOut(): void{
    this.currentUser = undefined;
    this.singInComponent = true;
    this.singUpComponent = false;
    this.forgotPassComponent = false;
    this.detailsComponent = false;
    this.accepted = false;
    this.timeToChangePass = false;
  }
  forgotPass(): void{
    this.forgotPassComponent = true;
    this.singInComponent = false;
    this.singUpComponent = false;
    this.detailsComponent = false;
    this.timeToChangePass = false;
  }
}
