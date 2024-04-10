import { Fetcher } from 'openapi-typescript-fetch';

import { paths } from './apiDocumentation.ts';
import { PORT, PROTOCOL, URL } from './constants.ts';

export class ApiClientService {
  #config: ReturnType<typeof Fetcher.for<paths>> | undefined;

  constructor(baseUrl: string) {
    const apiClient = Fetcher.for<paths>();

    apiClient.configure({
      baseUrl,
      init: {
        headers: {},
      },
      use: [],
    });

    this.config = apiClient;
  }

  get config() {
    if (!this.#config) {
      throw Error('ApiClientService is not initialized');
    }

    return this.#config;
  }

  set config(config) {
    this.#config = config;
  }
}

export const apiClientService = new ApiClientService(
  `${PROTOCOL}://${URL}:${PORT}`,
);
