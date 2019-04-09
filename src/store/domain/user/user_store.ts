import { UserApi } from './user_api';

export class UserStore {
  private userApi: UserApi;

  constructor(userApi: UserApi) {
    this.userApi = userApi;
  }

  public loginUser = (): Promise<void> => {
    return this.userApi.postUserLogin()
  }

  public loginSocial = (): Promise<void> => {
    return this.userApi.postSocialLogin();
  }
}