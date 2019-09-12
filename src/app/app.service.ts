import { Observable } from 'rxjs';
import { UserType } from './@core/interfaces';
import { HttpClient } from '@angular/common/http';

export class User {
  constructor(public http: HttpClient) {}

  public users: Array<UserType> = [];
  public url: string = 'http://localhost:4200/assets/users.json';

  public getUsers(): Observable<UserType[]> {
    return this.http.get<UserType[]>(this.url);
  }
  public deleteUser(id: number): Observable<{}> {
    const url = `${this.url}/${id}`;
    return this.http.delete<UserType[]>(url);
  }
  public editUser(id: number, data: object): Observable<{}> {
    const url = `${this.url}/${id}`;
    return this.http.post<UserType[]>(url, data);
  }

  /*public deleteUser(users: UserType[], id: number): object {
    const observable: Observable<UserType[]> = new Observable<UserType[]>((subscriber: any) => {
      users.splice(users.findIndex(item => item.id === id), 1);
      subscriber.next(users);
      subscriber.complete();
    });
    return observable.subscribe(data => {
      this.users = data;
    }, (error) => {
      console.log(error);
    });
  }*/
 /* public editUser(users: UserType[], id: number, name: string): object {
    const index: number = this.users.findIndex(item => item.id === id);
    const observable: Observable<UserType[]> = new Observable<UserType[]>((subscriber: any) => {
      users[index].name = name;
      subscriber.next(users);
      subscriber.complete();
    });
    return observable.subscribe(data => {
      this.users = data;
    }, (error) => {
      console.log(error);
    });
  }*/
  /*public saveUserVerification(users: UserType[], id: number, verification: object): object {
    const index: number = this.users.findIndex(item => item.id === id);
    const observable: Observable<UserType[]> = new Observable<UserType[]>((subscriber: any) => {
      users[index].verification = verification;
      subscriber.next(users);
      subscriber.complete();
    });
    return observable.subscribe(data => {
      this.users = data;
    }, (error) => {
      console.log(error);
    });
  }*/
}
