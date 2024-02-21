import { Request, Response } from 'express';
import userService from '../services/user.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function list(req: Request, res: Response) {
  const serviceResponse = await userService.list();
  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }
  res.status(200).json(serviceResponse.data);
}

export default {
  list,
};