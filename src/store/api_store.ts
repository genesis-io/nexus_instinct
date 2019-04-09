import config from '../config';

export class BaseApi {
  private baseUrl = `${config.protocol}://${config.host}:${config.port}`;
  private baseOptions = {
    headers: {
      "Content-Type": "application/json",
      "Accept-Encoding": "gzip"
    },
  };

  private baseRequest = (path: string, additionalOptions: RequestInit) => {
    return fetch(`${this.baseUrl}/${path}`, {
      ...this.baseOptions,
      ...additionalOptions
    })
      .then(response => response.json());
  };

  public get = <T>(path: string, additionalOptions?: GlobalFetch): Promise<T> => {
    return this.baseRequest(path, {
      ...additionalOptions,
      method: "GET"
    })
  };

  public post = <T>(path: string, additionalOptions?: GlobalFetch): Promise<T> => {
    console.log(`${this.baseUrl}/${path}`);
    return this.baseRequest(path, {
      ...additionalOptions,
      method: "POST"
    });
  };

  public delete = <T>(path: string, additionalOptions?: GlobalFetch): Promise<T> => {
    return this.baseRequest(path, {
      ...additionalOptions,
      method: "DELETE"
    })
  };

  public put = <T>(path: string, additionalOptions?: GlobalFetch): Promise<T> => {
    return this.baseRequest(path, {
      ...additionalOptions,
      method: "PUT"
    })
  };

  public patch = <T>(path: string, additionalOptions?: GlobalFetch): Promise<T> => {
    return this.baseRequest(path, {
      ...additionalOptions,
      method: "PATCH"
    })
  };
}