import chai, { expect } from 'chai';
import { describe, it } from 'mocha';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { listCtrl } from './controllers';
import { TodoService } from './model';

chai.use(sinonChai);

describe('listCtrl function', () => {
  it('should call res.json', async () => {
    const todoServiceMock = sinon.mock(TodoService);
    todoServiceMock
      .expects('find')
      .once()
      .resolves([{ _id: 'abc', title: 'ABC', completed: true }]);

    const req = {} as any;
    const res = {
      json: sinon.spy(),
    } as any;
    const next = () => {};

    await listCtrl(req, res, next);

    expect(res.json).to.have.been.calledOnceWithExactly([{ _id: 'abc', title: 'ABC', completed: true }]);
    todoServiceMock.verify();
  });

  it('should call next on error', async () => {
    const todoServiceMock = sinon.mock(TodoService);
    const err = new Error('error from mock');
    todoServiceMock.expects('find').once().rejects(err);

    const req = {} as any;
    const res = {} as any;
    const next = sinon.spy();

    await listCtrl(req, res, next);

    expect(next).to.have.been.calledOnceWithExactly(err);
    todoServiceMock.verify();
  });
});
