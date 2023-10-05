// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken';
import { ensureConnection } from '@/lib/dbConnect';
import { validateLoginInputs } from 'zod';
import { HTTPStatus, sendResponse } from 'response-handler';
import { Receptionist } from 'db';

const SECRET = "mysec"


type Data = {
  name: string,
  // value: Object
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  if(req.method !== "POST"){

  }else{

    const response = validateLoginInputs(req.body);
    if (!response.success) {
      const { errors } = response.error;
      sendResponse(res, { apiStatus: HTTPStatus.FORBIDDEN, data: {errors} })
      return;
    }
    // let token = jwt.verify(jwttoken);
    ensureConnection();
    const {email, password} = response.data
    
    const checkUser = await Receptionist.findOne({email, password}).lean()
    if(!checkUser){
      sendResponse(res, { apiStatus: HTTPStatus.FORBIDDEN, message: "Invalid email and password combination" })
      return;
    }
    const token = jwt.sign({email, password}, SECRET)
    sendResponse(res, { apiStatus: HTTPStatus.OK, data: { token , email} })
  }
}
