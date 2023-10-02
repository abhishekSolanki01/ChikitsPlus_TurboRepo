import { HTTPStatus, HTTPStatusCode, HTTPStatusMessage } from "./enums";

export const sendResponse = (res: any, obj : {
    message?: string,
    data?: object,
    apiStatus: HTTPStatus
}) => {
    let code = HTTPStatusCode[obj.apiStatus]
    let resObj = {message : obj.message || HTTPStatusMessage[obj.apiStatus] ,error: true, data: obj.data};
    if(obj.apiStatus === HTTPStatus.OK){
        resObj.error = false;
    }
    res.status(code).json(resObj);
}