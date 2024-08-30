import { Router } from 'express';
import CustomerController from './controllers/customer.controller';

const router = Router();
const customerController = new CustomerController();

router.route('/test').get(customerController.test);


export default  router