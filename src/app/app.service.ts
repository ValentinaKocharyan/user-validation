import { Observable } from 'rxjs';
import { UserType } from './@core/interfaces';

export class User {
  public users: Array<UserType> = [
    {
      id: 1,
      name: 'User 1',
      email: 'user1@gmail.com'
    },
    {
      id: 2,
      name: 'User 2',
      email: 'user2@gmail.com'
    },
    {
      id: 3,
      name: 'User 3',
      email: 'user3@gmail.com'
    },
    {
      id: 4,
      name: 'User 4',
      email: 'user4@gmail.com'
    }
  ];
  public getUsers(users) {
    const observable = new Observable<Array<UserType>>(function subscribe(subscriber: any) {
      subscriber.next(users);
      subscriber.complete();
    });
    return observable.subscribe(data => {
      users = data;
    }, (error) => {
      console.log(error);
    });
  }
  public deleteUser(users, id: number) {
    const observable = new Observable<Array<UserType>>(function subscribe(subscriber: any) {
      users.splice(users.findIndex(item => item.id === id), 1);
      subscriber.next(users);
      subscriber.complete();
    });
    return observable.subscribe(data => {
      this.users = data;
    }, (error) => {
      console.log(error);
    });
  }
  public editUser(users, id: number, name: string) {
    const index = this.users.findIndex(item => item.id === id);
    const observable = new Observable<Array<UserType>>(function subscribe(subscriber: any) {
      users[index].name = name;
      subscriber.next(users);
      subscriber.complete();
    });
    return observable.subscribe(data => {
      this.users = data;
    }, (error) => {
      console.log(error);
    });
  }
}
