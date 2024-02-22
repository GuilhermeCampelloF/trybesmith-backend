import { ProductInputtableTypes } from '../database/models/product.model';
import UserModel from '../database/models/user.model';
import { ServiceResponseError } from '../types/ServiceResponse';
// import mapStatusHTTP from '../utils/mapStatusHTTP';

function validateParams(
  { name, price, userId }: ProductInputtableTypes,
): ServiceResponseError | null {
  if (!name) return { status: 'BAD_REQUEST', data: { message: '"name" is required' } };
  if (!price) return { status: 'BAD_REQUEST', data: { message: '"price" is required' } };
  if (!userId) return { status: 'BAD_REQUEST', data: { message: '"userId" is required' } };
  return null;
}

function validateProductName({ name }: ProductInputtableTypes): ServiceResponseError | null {
  if (typeof name !== 'string') {
    return { status: 'UNPROCESSABLE_ENTITY', data: { message: '"name" must be a string' } };
  }
  if (name.length < 3) {
    return { status: 'UNPROCESSABLE_ENTITY', 
      data: { message: '"name" length must be at least 3 characters long' } };
  }
  return null;
}

function validateProductPrice({ price }: ProductInputtableTypes): ServiceResponseError | null {
  if (typeof price !== 'string') {
    return { status: 'UNPROCESSABLE_ENTITY', data: { message: '"price" must be a string' } };
  }
  if (price.length < 3) {
    return { status: 'UNPROCESSABLE_ENTITY', 
      data: { message: '"price" length must be at least 3 characters long' } };
  }
  return null;
}

async function validateProductUserId({ userId }: ProductInputtableTypes):
Promise<ServiceResponseError | null> {
  if (typeof userId !== 'number') {
    return { status: 'UNPROCESSABLE_ENTITY', data: { message: '"userId" must be a number' } };
  }
  const existingUser = await UserModel.findByPk(userId);
  if (!existingUser) {
    return { status: 'UNPROCESSABLE_ENTITY', data: { message: '"userId" not found' } };
  }
  return null;
}

async function validateProduct(product: ProductInputtableTypes):
Promise<ServiceResponseError | null> {
//   const { name, price, userId } = product;
  const validateInput = validateParams(product);
  if (validateInput) return validateInput;
  const validateName = validateProductName(product);
  if (validateName) return validateName;
  const validatePrice = validateProductPrice(product);
  if (validatePrice) return validatePrice;
  const validateUserId = await validateProductUserId(product);
  if (validateUserId) return validateUserId;
  return null;
}

export default {
  validateParams,
  validateProductName,
  validateProductPrice,
  validateProductUserId,
  validateProduct,
};