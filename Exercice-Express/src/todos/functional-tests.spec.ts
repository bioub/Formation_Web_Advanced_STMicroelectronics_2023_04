import { it } from 'mocha';
import { app } from '../app';
import chaiHttp from 'chai-http';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import { TodoService } from './model';

chai.use(chaiHttp);

it('GET /api/todos', async () => {
  const todoServiceMock = sinon.mock(TodoService);
  todoServiceMock
    .expects('find')
    .once()
    .resolves([{ _id: 'abc', title: 'ABC', completed: true }]);

  const res = await chai.request(app).get('/api/todos');

  expect(res).to.have.status(200);
  expect(res).to.be.json;
  expect(res.body).to.deep.equals([{ _id: 'abc', title: 'ABC', completed: true }]);

  todoServiceMock.verify();
});
