import config from '../../config';

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
      .then(response => response.json())
    // TODO: figure out what messages i want to display here instead of console log
  };

  public get = <T>(path: string, additionalOptions?: RequestInit): Promise<T> => {
    return this.baseRequest(path, {
      ...additionalOptions,
      method: "GET"
    })
  };

  public post = <T>(path: string, body: any, additionalOptions?: RequestInit): Promise<T> => {
    return this.baseRequest(path, {
      ...additionalOptions,
      body: JSON.stringify(body),
      method: "POST"
    });
  };

  public delete = <T>(path: string, additionalOptions?: RequestInit): Promise<T> => {
    return this.baseRequest(path, {
      ...additionalOptions,
      method: "DELETE"
    })
  };

  public put = <T>(path: string,  body: any, additionalOptions?: RequestInit): Promise<T> => {
    return this.baseRequest(path, {
      ...additionalOptions,
      body: JSON.stringify(body),
      method: "PUT"
    })
  };

  public patch = <T>(path: string,  body: any, additionalOptions?: RequestInit): Promise<T> => {
    return this.baseRequest(path, {
      ...additionalOptions,
      body: JSON.stringify(body),
      method: "PATCH"
    })
  };
}