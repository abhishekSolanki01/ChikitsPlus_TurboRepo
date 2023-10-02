// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken';
import { Receptionist } from 'db';
import { HTTPStatus, sendResponse } from 'response-handler';
import { ensureConnection } from '@/lib/dbConnect';
import mongoose from 'mongoose';
import { signUpInputs } from 'zod';

const SECRET = "mysec"

type Data = {
  name: string,
  token: string,
  response: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  if (req.method !== "POST") {
    sendResponse(res, { apiStatus: HTTPStatus.INVALIDMETHOD })
    return;
  } else {
    try {
      console.log("req.body", req.body);
      
      const response = signUpInputs.safeParse(req.body);
      if (!response.success) {
        const { errors } = response.error;
        sendResponse(res, { apiStatus: HTTPStatus.FORBIDDEN, data: { errors } })
        return;
      }
      ensureConnection();
      let {email, password} = response.data;
      const token = jwt.sign({ email, password }, SECRET);
      const receptionistCol = new Receptionist()
      const data = await receptionistCol.save(response.data)
      sendResponse(res, { apiStatus: HTTPStatus.OK, data: { token, data } })
      
    } catch (error) {
      sendResponse(res, { apiStatus: HTTPStatus.INTERNALSERVERERROR , data: { errors: error } })
    }
  }
}
