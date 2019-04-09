import {
  computed,
  IReactionDisposer,
  observable,
  reaction
} from 'mobx';
import { UserStore } from './user_store';

interface UserJson {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export class User {
  @observable email = '';
  @observable firstName = '';
  @observable lastName = '';

  public id: number;
  private store: UserStore;
  private autoSave = true;
  private saveHandler: IReactionDisposer;

  constructor(store: UserStore, id: number) {
    this.store = store;
    this.id = id;

    this.saveHandler = reaction(
      // observe everything that is used in the JSON:
      () => this.asJson,
      // if autoSave is on, send json to server
      (json) => {
        if (this.autoSave) {
          // this.store.rootStore.transportLayer.saveUser(json);
        }
      }
    );
  }

  @computed get asJson() {
    return {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
    };
  }

  updateFromJson(json: UserJson) {
    // make sure our changes aren't sent back to the server
    this.autoSave = false;
    this.email = json.email;
    this.firstName = json.firstName;
    this.lastName = json.lastName;
    this.autoSave = true;
  }

  dispose() {
    // clean up the observer
    this.saveHandler();
  }
}