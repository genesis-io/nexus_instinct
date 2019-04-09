import { BaseApi } from '../../api_store';

export class UserApi extends BaseApi {

  postUserLogin = (): Promise<void> => {
    return this.post('rubyapi/v1/login');
  };

  postSocialLogin = (): Promise<void> => {
    return this.post('rubyapi/v1/social');
  }
}