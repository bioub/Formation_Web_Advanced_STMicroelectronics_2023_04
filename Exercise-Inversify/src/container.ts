import { Container } from "inversify";
import { UserPage } from "./UserPage";
import { UserService } from "./UserService";
import { HttpClient } from "./HttpClient";
import { FakeHttpClient } from "./FakeHttpClient";
import { HttpClientInterface } from "./HttpClientInterface";

export const container = new Container();

container.bind(UserPage).toSelf().inSingletonScope();
container.bind(UserService).toSelf().inSingletonScope();
container.bind(HttpClient).toSelf().inSingletonScope();
container.bind(FakeHttpClient).toSelf().inSingletonScope();

container.bind(HttpClientInterface).toService(HttpClient);
