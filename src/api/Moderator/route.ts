import { Router } from 'express';
import ModeratorController from './controllers/moderator.controller';

const router = Router();
const moderatorController = new ModeratorController();

router.route('/test').get(moderatorController.test);

export default router;
