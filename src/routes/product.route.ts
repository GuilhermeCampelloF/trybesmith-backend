import { Router } from 'express';
import productController from '../controllers/product.controller';

const productRouter = Router();
productRouter.post('/', productController.create);
productRouter.get('/', productController.list);

export default productRouter;