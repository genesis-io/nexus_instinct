import {action, observable} from 'mobx';
import { RootStore } from '../root/root_store';
import { User } from '../domain/user';

export class UiStore {
  @observable currentUser: User | undefined;
  private rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @action
  public setCurrentUser = ({ id, email, userName }: { id: number; email: string; userName: string; }) => {
    this.currentUser = new User({
      id,
      email,
      userName
    })
  };
}