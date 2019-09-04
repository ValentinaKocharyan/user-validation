import { Observable } from 'rxjs';
import { UserType } from './@core/interfaces';

export class User {
  public  verifications: Array<string> = ['SMS', 'Email', 'Phone', 'Credit', 'Survey'];
  public users: Array<UserType> = [
    {
      id: 1,
      name: 'User 1',
      email: 'user1@gmail.com',
      verification: [true, false, true, false, false]
    },
    {
      id: 2,
      name: 'User 2',
      email: 'user2@gmail.com',
      verification: [true, false, true, false, false]
    },
    {
      id: 3,
      name: 'User 3',
      email: 'user3@gmail.com',
      verification: [true, false, true, false, false]
    },
    {
      id: 4,
      name: 'User 4',
      email: 'user4@gmail.com',
      verification: [true, false, true, false, false]
    }
  ];
  public getUsers(users: UserType[]): object {
    const observable = new Observable<UserType[]>(function subscribe(subscriber: any) {
      subscriber.next(users);
      subscriber.complete();
    });
    return observable.subscribe(data => {
      this.users = data;
    }, (error) => {
      console.log(error);
    });
  }
  public deleteUser(users: UserType[], id: number): object {
    const observable = new Observable<UserType[]>(function subscribe(subscriber: any) {
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
  public editUser(users: UserType[], id: number, name: string): object {
    const index = this.users.findIndex(item => item.id === id);
    const observable = new Observable<UserType[]>(function subscribe(subscriber: any) {
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
  public saveUserVerification(users: UserType[], id: number, verification: Array<boolean>): object {
    const index = this.users.findIndex(item => item.id === id);
    const observable = new Observable<UserType[]>(function subscribe(subscriber: any) {
      users[index].verification = verification;
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
