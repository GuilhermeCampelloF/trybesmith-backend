import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import ProductModel from '../../../src/database/models/product.model';
import productMock from '../../mocks/product.mock';

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });
  
  it('Testa se é cadastrado um produto corretamente', async function() {
    const httpRequestBody = productMock.createNewProductMock;
    sinon.stub(ProductModel, 'create').resolves(ProductModel.build(productMock.newProductReturnMock));
    const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);
    expect(httpResponse.status).to.equal(201);
    expect(httpResponse.body).to.deep.equal(productMock.newProductReturnMock);
  });

  it('Testa se não é possível cadastrar um produto caso não informado o "name"', async function() {
    const httpRequestBody = productMock.noNameProductBody;
    const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);
    expect(httpResponse.status).to.equal(422);
    expect(httpResponse.body).to.be.deep.equal({ message: 'Name is required' });
  })

  it('Testa se não é possível cadastrar um produto caso não informado o "price"', async function() {
    const httpRequestBody = productMock.noPriceProductBody;
    const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);
    expect(httpResponse.status).to.equal(422);
    expect(httpResponse.body).to.be.deep.equal({ message: 'Price is required' });
  })
});
