import {Component, EventEmitter, Output} from '@angular/core';
import {User} from '../Shared/User';
import {ListOfUsers} from '../Shared/users';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent {
  listOfUsers: User[] = ListOfUsers.users;
  currentUser: User;
  @Output() event: EventEmitter<User> = new EventEmitter();
  username =  new FormControl('', [Validators.required]);
  passWord =  new FormControl('', [Validators.required]);
  message: string;
  attempts = 0;
  constructor() { }
  getUserName(): string{
    if (this.username.hasError('required')){
      return 'Поле не должно быть пустым!';
    }
  }
  getPassword(): string{
    if (this.passWord.hasError('required')){
      return 'Поле не должно быть пустым!';
    }
  }
  singIn(): void{
      for (const item of this.listOfUsers) {
        if (item.getUsername() !== this.username.value) {
          continue;
        }
        if ((item.getUsername() === this.username.value) && (this.attempts === 3)){
          item.isBlocked = true;
          this.attempts = 0;
          this.message = 'У вас было слишком много безуспешных попыток, в целях безопасности мы заблокировали ваш аккаунт. Вы можете разблокировать ваш пароль.' + this.username.value;
          break;
        }
        if ((item.getUsername() === this.username.value) &&
          (item.getPassword() === this.passWord.value)
        ){
          if (item.isBlocked === true){
            this.message = 'Ваш аккаунт был заблокирован';
          }else{
            this.currentUser = item;
            console.log('success');
            this.event.emit(this.currentUser);
            break;
          }
        }else {
          this.currentUser == null ? this.message = 'Не правильное имя пользователя или пароль' : this.message = null;
          break;
        }
      }
      this.attempts++;
  }
}
