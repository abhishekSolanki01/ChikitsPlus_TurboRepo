export enum HTTPStatusCode {
    "OK" = 200,
    "NOTFOUND" = 404,
    "UNAUTHORIZED" = 401,
    "FORBIDDEN" = 403,
    "BADREQUEST" = 400,
    "INTERNALSERVERERROR" = 500,
    "INVALIDMETHOD" = 405,
  }

  export enum HTTPStatus {
    "OK" = "OK",
    "NOTFOUND" = "NOTFOUND",
    "UNAUTHORIZED" = "UNAUTHORIZED",
    "FORBIDDEN" = "FORBIDDEN",
    "BADREQUEST" = "BADREQUEST",
    "INTERNALSERVERERROR" =  "INTERNALSERVERERROR",
    "INVALIDMETHOD" = "INVALIDMETHOD",
  }

  export enum HTTPStatusMessage {
    "OK" = "Sucess",
    "NOTFOUND" = "Not Found",
    "UNAUTHORIZED" = "Unauthorized",
    "FORBIDDEN" = "Forbidden",
    "BADREQUEST" = "Invalid Request",
    "INTERNALSERVERERROR" =  "Internal Server error",
    "INVALIDMETHOD" = "Invalid method",
  }
  
  export enum APIStatus {
    "SUCCESS" = "SUCCESS",
    "FAILED" = "FAILED",
  }

  export enum UserRoles {
    "ADMIN" = "ADMIN",
    "RECEPTIONIST" = "RECEPTIONIST",
    "PATIENT" = "PATIENT"
  }