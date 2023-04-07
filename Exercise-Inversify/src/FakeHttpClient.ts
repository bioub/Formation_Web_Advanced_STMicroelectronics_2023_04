import { injectable } from 'inversify';
import { HttpClientInterface } from './HttpClientInterface';

@injectable()
export class FakeHttpClient implements HttpClientInterface {
  private data!: any;

  async get(_: string) {
    return this.data;
  }

  setData(data: any) {
    this.data = data;
  }
}
