import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import UserModel from '../../../src/database/models/user.model';
import loginMock from '../../mocks/login.mock';

chai.use(chaiHttp);

describe('POST /login', function () { 
  beforeEach(function () { sinon.restore(); });
  it('Testa um login válido', async function () {
    const httpRequestBody = loginMock.validLoginMock;
    sinon.stub(UserModel, 'findOne').resolves(UserModel.build(loginMock.existingUserMock));
    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);
    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.haveOwnProperty('token');
  })
  it('Testa se é retornado um erro caso não seja informado um username', async function () {
    const httpRequestBody = loginMock.noUsernameLoginMock;
    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);
    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body).to.deep.equal({ message: '"username" and "password" are required' });
  })
  it('Testa se é retornado um erro caso não seja informado um password', async function () {
    const httpRequestBody = loginMock.noPasswordLoginMock;
    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);
    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body).to.deep.equal({ message: '"username" and "password" are required' });
  })
  it('Testa se é retornado um erro caso o password seja inválido', async function () {
    const httpRequestBody = loginMock.wrongPasswordLoginMock;
    sinon.stub(UserModel, 'findOne').resolves(UserModel.build(loginMock.existingUserMock));
    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);
    expect(httpResponse.status).to.equal(401);
    expect(httpResponse.body).to.deep.equal({ message: 'Username or password invalid' });
  })
});
