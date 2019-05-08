import { UiStore } from '../ui/ui_store';
import { UserStore } from '../domain/user';

export class RootStore {
  public uiStore: UiStore;
  public userStore: UserStore;

  constructor() {
    this.uiStore = new UiStore(this);
    this.userStore = new UserStore(this);
  }
}