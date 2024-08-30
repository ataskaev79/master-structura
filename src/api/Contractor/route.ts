import { Router } from 'express';
import ContractorController from './controllers/contractor.controller';

const router = Router();
const contractorController = new ContractorController();

router.route('/test').get(contractorController.test);


export default  router