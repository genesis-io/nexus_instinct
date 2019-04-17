import { action } from 'mobx';
import {
  UserApi,
  User
} from './';
import { RootStore } from "../../root_store";

export class UserStore {
  private userApi: UserApi;
  private rootStore: RootStore;

  constructor(userApi: UserApi, rootStore: RootStore) {
    this.rootStore = rootStore;
    this.userApi = userApi;
  }

  @action
  public createUser = ({ id, email, userName }: { id: number; email: string; userName: string; }) => {
    this.rootStore.uiStore.currentUser = new User({
      id,
      email,
      userName
    })
  };

  public loginUser = (): Promise<void> => {
    return this.userApi.postUserLogin()
  };

  public loginSocial = (): Promise<void> => {
    return this.userApi.postSocialLogin();
  };
}