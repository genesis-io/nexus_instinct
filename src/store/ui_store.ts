import { observable } from 'mobx';
import { RootStore } from './root_store';

export class UiStore {
  @observable currentUser = '';
  private rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }
}