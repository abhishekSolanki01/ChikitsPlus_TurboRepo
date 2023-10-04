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
      let { email } = req.body;
      const ifExist = await Receptionist.find({ email }).lean()

      if (ifExist) {
        sendResponse(res, { apiStatus: HTTPStatus.OK, message: "User exist" })
        return
      }
      sendResponse(res, { apiStatus: HTTPStatus.UNAUTHORIZED })

    } catch (e) {
      sendResponse(res, { apiStatus: HTTPStatus.INTERNALSERVERERROR , data: { errors: e } })
    }
  }



}
