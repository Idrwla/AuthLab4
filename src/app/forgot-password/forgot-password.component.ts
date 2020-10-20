import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ListOfUsers} from '../Shared/users';
import {User} from '../Shared/User';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  @Output() event: EventEmitter<User> = new EventEmitter();
  listOfUsers: User[] = ListOfUsers.users;
  usernameOrEmail = new FormControl('');
  newPassword = new FormControl('');
  validationCode = Math.random().toString(36).substring(7);
  accepted: boolean;
  errormessage: string;
  constructor() { }
  validate(event): void{
    if (this.validationCode === event.target.value ){
      this.accepted = true;
      this.errormessage = null;
    }else{
      this.errormessage = 'Не правильно введен код с картинки';
    }
  }
  unblock(): void{
    if (this.accepted === true){
      for ( const item of this.listOfUsers ){
        if (( item.getUsername() === this.usernameOrEmail.value) ||
        ( item.getEmail() === this.usernameOrEmail.value)){
          item.isBlocked = false;
          item.setPassword(this.newPassword.value);
          this.event.emit(item);
          break;
        }else{
          this.errormessage = 'Вы ввели не правильный логин или пароль';
        }
      }
    }
  }
}
