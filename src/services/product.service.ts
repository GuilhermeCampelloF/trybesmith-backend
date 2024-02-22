import ProductModel, { 
  ProductInputtableTypes,
  ProductSequelizeModel,
} from '../database/models/product.model';
import { ServiceResponse } from '../types/ServiceResponse';
import { Product } from '../types/Product';
import productValidation from '../validators/product.validation';

async function create(product: ProductInputtableTypes): Promise<ServiceResponse<Product>> {
  const error = await productValidation.validateProduct(product);
  if (error) return error;
  const newProduct = await ProductModel.create(product);
  return { status: 'SUCCESSFUL', data: newProduct.dataValues };
}

async function list(): Promise<ServiceResponse<ProductSequelizeModel[]>> {
  const allProducts = await ProductModel.findAll();
  return { status: 'SUCCESSFUL', data: allProducts };
}

export default {
  create,
  list,
};