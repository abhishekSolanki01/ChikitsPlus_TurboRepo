// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken';
import { Receptionist } from 'db';
import { HTTPStatus, sendResponse } from 'response-handler';
const SECRET = "mysec"

type Data = {
  name: string,
  // value: Object
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "GET") {
    sendResponse(res, { apiStatus: HTTPStatus.INVALIDMETHOD })
    return;
  } else {
    try {
      // let { email } = req.body;
      // const ifExist = await Receptionist.find({ email }).lean()

      const authorization = req.headers.authorization;
      if (!authorization) {
        sendResponse(res, { apiStatus: HTTPStatus.UNAUTHORIZED })
        return
      }

      const token = authorization.split(" ")[1];
      const ifExist:any = jwt.verify(token, SECRET)

      if (ifExist) {
        const userData = await Receptionist.findOne({email : ifExist.email})
        sendResponse(res, { apiStatus: HTTPStatus.OK, message: "User exist", data: {email: userData.email} })
        return
      }
      sendResponse(res, { apiStatus: HTTPStatus.UNAUTHORIZED })

    } catch (e) {
      sendResponse(res, { apiStatus: HTTPStatus.INTERNALSERVERERROR, data: { errors: e } })
    }
  }



}
