import fetchMock from 'fetch-mock';
import { UserStore } from './';
import { RootStore } from '../../root/root_store';

const store = new UserStore(new RootStore());
const mockLogin = {
  email: 'mockuser@mock.com',
  password: 'mock'
};

afterEach(() => {
  fetchMock.restore();
});

describe('UserStore', () => {
  it('should login the user to the api', async () => {
    const spy = jest.spyOn(store, 'loginUser');
    fetchMock.post('http://localhost:3000/rubyapi/v1/login', {});
    await store.loginUser(mockLogin);
    expect(spy).toHaveBeenCalled();
  });

  it('should implement social login to the api', async () => {
    const spy = jest.spyOn(store, 'loginSocial');
    fetchMock.post('http://localhost:3000/rubyapi/v1/social', {});
    await store.loginSocial(mockLogin);
    expect(spy).toHaveBeenCalled();
  });
});