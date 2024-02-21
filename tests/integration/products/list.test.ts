import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import ProductModel from '../../../src/database/models/product.model';
import productMock from '../../mocks/product.mock';

chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Testa se é retornado a lista de todos os produtos', async function() {
    const httpRequestBody = productMock.allProductsMock;
    sinon.stub(ProductModel, 'findAll').resolves(ProductModel.bulkBuild(httpRequestBody));
    const httpResponse = await chai.request(app).get('/products');
    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.deep.equal(productMock.allProductsMock);
  })
});
