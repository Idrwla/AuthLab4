import {Component, EventEmitter, Output} from '@angular/core';
import {User} from '../Shared/User';
import {ListOfUsers} from '../Shared/users';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent {
  listOfUsers = ListOfUsers.users;
  @Output()event: EventEmitter<User> = new EventEmitter();
  currentUser: User;
  userName =  new FormControl('' , [Validators.required]);
  password: string;
  agreed: boolean;
  message: string;
  errorMessage: string;
  canSubmit: boolean;
  email = new FormControl('', [ Validators.required, Validators.email]);

  constructor() { }
  getUserName(): string{
    if ( this.userName.hasError('required')){
      return  this.errorMessage = 'Поле не должно быть пустым';
    }
  }
  getEMail(): string {
    if ( this.email.hasError('required')){
      return  this.errorMessage = 'Поле не должно быть пустым';
    } else if (this.email.hasError('email')){
       return this.errorMessage = 'Не правильлный адрес электронной почты' + this.email.value ;
    }
  }
  getPassword(event): void {
    if (event.target.value.length >= 6){
      this.password = event.target.value;
    }
  }
  getCongPassword(event): void {
    if (event.target.value === this.password){
      this.password = event.target.value;
      this.message = null;
    }else{
      this.message = 'Пароли не совпадают';
    }
  }
  agreedWithPrivacyTerm(event): void{
    this.agreed = event.checked;
    this.canSubmit = (this.agreed === true) && (this.userName.value !== '') && (this.email.value !== '') && (this.password !== '');
  }
  singUp(): void{
    if ((this.agreed === true) && (this.userName.value !== '') && (this.email.value !== '') && (this.password !== '')){
        this.currentUser = new User(this.userName.value , this.password, this.email.value );
        this.listOfUsers.push(this.currentUser);
        this.event.emit(this.currentUser);
        console.log('Success');
    }else{
      this.message = 'Fields are incorrectly filled';
    }
    console.log(this.listOfUsers[1].getUsername());
  }
}
