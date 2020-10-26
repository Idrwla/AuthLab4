export class User{
  private username: string;
  private password: string;
  private email: string;
  isBlocked = false;
  constructor(username, pass , email) {
      this.setUsername(username);
      this.setPassword(pass);
      this.setEmail(email);
  }
  getUsername(): string{
    return this.username;
  }
  setUsername(newUsername): void{
      this.username = newUsername;
  }
  getPassword(): string{
    return this.password;
  }
  setPassword(newPass): void{
      this.password = newPass;
  }
  getEmail(): string{
    return this.email;
  }
  setEmail(newEmail): void {
    this.email = newEmail;
  }
}
