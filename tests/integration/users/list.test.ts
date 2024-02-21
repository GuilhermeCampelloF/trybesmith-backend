import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import UserModel from '../../../src/database/models/user.model';
import userMock from '../../mocks/user.mock';

chai.use(chaiHttp);

describe('GET /users', function () { 
  beforeEach(function () { sinon.restore(); });
  it('Testa se é retornado a lista de todos os usuários', async function() {
    const httpRequestBody = userMock.userListMock;
    sinon.stub(UserModel, 'findAll').resolves(UserModel.bulkBuild(httpRequestBody, { include: 'productIds' }));
    const httpResponse = await chai.request(app).get('/users');
    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.deep.equal([{ username: 'userTest', productIds: [1] }]);
  })
});
