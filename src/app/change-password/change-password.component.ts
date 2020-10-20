import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {User} from '../Shared/User';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  @Input()currentUser: User;
  @Output() event: EventEmitter<User> = new EventEmitter();
  currentPassword = new FormControl('');
  newPassword = new FormControl('');
  confNewPassword = new FormControl('');
  errormessage: string;
  constructor() { }
  changePass(): void{
    if ((this.currentPassword.value === this.currentUser.getPassword()) && (
      this.newPassword.value === this.confNewPassword.value
    ) ){
      this.currentUser.setPassword(this.newPassword.value);
      this.event.emit(this.currentUser);
    }else {
      this.errormessage = 'Не правильно введены данные!';
    }
  }

}
