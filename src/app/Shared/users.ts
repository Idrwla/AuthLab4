import {User} from './User';

export class ListOfUsers{
  static users: User[] = [];
}
const Admin: User = new User('adminOfService', 'admin123', 'admin@gmail.com');
ListOfUsers.users.push(Admin);

