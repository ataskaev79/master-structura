import httpStatus from 'http-status';
import { APIError, APIResponse } from '../../../utils/api.utils';
import { Request, Response } from 'express';


class CustomerController   {
  test = async (req: Request, res: Response) => {
    try{
    res.send("<h2>Привет CustomerController!!!!!!</h2>");
    // return APIResponse({
    //     res,
    //     data: 'sdfsdfsdfsdf',
    // });
    console.log("<h2>Привет CustomerController!!!!!!</h2>")
    } catch (err:any) {
      throw APIError({
        res,
        status: httpStatus.INTERNAL_SERVER_ERROR,
        message: 'Language list not loaded',
        error: err,
      });
    }
  };
}
export default CustomerController;

