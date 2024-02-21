import UserModel from '../database/models/user.model';
import ProductModel from '../database/models/product.model';
import { ServiceResponse } from '../types/ServiceResponse';
import { UserList } from '../types/User';

async function list(): Promise<ServiceResponse<UserList[]>> {
  const users = await UserModel.findAll({
    attributes: ['username'],
    include: [{ model: ProductModel, as: 'productIds', attributes: ['id'] }],
  });
  const getUserList = users.map((user) => user.dataValues);
  const data = getUserList.map((user) => ({
    username: user.username,
    productIds: user.productIds?.map((product) => product.id),
  }));
  return { status: 'SUCCESSFUL', data };
}

export default {
  list,
};