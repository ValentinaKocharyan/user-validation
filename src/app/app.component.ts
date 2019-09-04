import { Component, OnInit } from '@angular/core';
import { User } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [User]
})
export class AppComponent implements OnInit {
  title = 'user-verification';

  constructor(public users: User) {}

  ngOnInit() {

  }

  deleteUser(users, userId: number) {
    this.users.deleteUser(users.users, userId);
  }
  editUser(users, userId: number, name: string) {
    this.users.editUser(users.users, userId, name);
  }
  saveUserVerification(users, userId: number, verification: Array<boolean>) {
    this.users.saveUserVerification(users.users, userId, verification);
  }
}
