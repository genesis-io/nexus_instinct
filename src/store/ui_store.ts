import { observable } from 'mobx';
import { RootStore } from './root_store';
import { User } from './domain/user';

export class UiStore {
  @observable currentUser: User | undefined;
  private rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }
}