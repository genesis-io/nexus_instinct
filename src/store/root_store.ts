import { UiStore } from './ui_store';
import {
  UserStore,
  UserApi
} from './domain/user';

export class RootStore {
  public uiStore: UiStore;
  public userStore: UserStore;

  constructor() {
    this.uiStore = new UiStore(this);
    this.userStore = new UserStore(new UserApi(), this);
  }
}