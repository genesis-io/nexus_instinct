import { RootStore } from '../../root/root_store';
import { BaseApi } from '../../api/api_store';

interface UserLoginInfo {
  email: string;
  password: string;
}

export class UserStore extends BaseApi {
  private rootStore: RootStore;

  constructor(rootStore: RootStore) {
    super();
    this.rootStore = rootStore;
  }

  public loginUser = (body: UserLoginInfo): Promise<void> => {
    return this.post('rubyapi/v1/login', body);
  };

  public loginSocial = (body: UserLoginInfo): Promise<void> => {
    return this.post('rubyapi/v1/social', body);
  };
}