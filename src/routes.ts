import { createRouter } from './core/utils/createRouter';
import authRouter  from "./api/Auth/route"
import moderatorRouter from"./api/Moderator/route"
import customerRouter  from "./api/Customer/route"
import contractorRouter from "./api/Contractor/route"


export const createMainRouter = () =>
  createRouter([
    ['/auth', authRouter],
    ['/moderator', moderatorRouter],
    ['/customer', customerRouter],
    ['/contractor', contractorRouter],
  ]);

