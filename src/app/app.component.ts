import { Component, OnInit } from '@angular/core';
import { User } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [User]
})
export class AppComponent implements OnInit {
  public title: string = 'user-verification';

  constructor(public users: User) {}

  ngOnInit() {
    this.getUsers();
  }
  getUsers(): void {
    this.users.getUsers().subscribe( res => {
      this.users.users = res;
    }, err => {
      console.log(err);
    });
  }
  deleteUser(id: number) {
    this.users.deleteUser(id).subscribe( res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }
  editUser(id: number, name: string) {
    const data: object = {name: name};
    this.users.editUser(id, data).subscribe( res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }
  /*saveUserVerification(users, userId: number, verification: object) {
    this.users.saveUserVerification(users.users, userId, verification);
  }*/
}
