// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken';
import { Receptionist } from 'db';
import { ensureConnection } from '@/lib/dbConnect';
import mongoose from 'mongoose';

const SECRET = "mysec"

type Data = {
  name: string,
  token: string,
  receptionistData: Object
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
ensureConnection();
  let {email, password } = req.body;
  const token = jwt.sign({email, password}, SECRET);
  const receptionistData = await Receptionist.find({})
  res.status(200).json({ name: 'John Doe', token, receptionistData})
}
