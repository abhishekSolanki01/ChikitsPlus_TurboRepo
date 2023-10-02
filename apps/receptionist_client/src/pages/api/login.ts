// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken';

type Data = {
  name: string,
  // value: Object
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let {email, password, jwttoken} = req.body;
  // let token = jwt.verify(jwttoken);
  res.status(200).json({ name: 'John Doe'})
}
