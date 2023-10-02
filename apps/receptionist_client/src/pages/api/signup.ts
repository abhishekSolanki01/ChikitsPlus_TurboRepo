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
  receptionistData: Object,
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
    const response = signUpInputs.safeParse(req.body);
    if(!response.success) {
      const { errors } = response.error;
      sendResponse(res, { apiStatus: HTTPStatus.FORBIDDEN, data: {errors} })
    }
    ensureConnection();
    let {
      email,
      password,
      firstName,
      lastName,
      gender,
      dob,
      contactNumber,
      address,
      userName } = req.body;
    const token = jwt.sign({ email, password }, SECRET);
    const receptionistData = await Receptionist.find({})
    res.status(200).json({ name: 'John Doe', token, receptionistData, response })
  }
}
