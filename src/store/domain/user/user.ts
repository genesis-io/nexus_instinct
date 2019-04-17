import { observable } from 'mobx';

interface UserJson {
  id: number;
  userName: string;
  email: string;
}

export class User {
  @observable email = '';
  @observable userName = '';
  public id: number;

  constructor({id, email, userName}: UserJson) {
    // this.store = store;
    this.id = id;
    this.email = email;
    this.userName = userName;
  }
}