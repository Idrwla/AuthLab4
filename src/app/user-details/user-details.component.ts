import {Component, Input, OnInit} from '@angular/core';
import {User} from '../Shared/User';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input() currentUser: User;
  constructor() { }

  ngOnInit(): void {
  }

}
