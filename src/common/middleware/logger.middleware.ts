import { Request, Response, NextFunction } from "express";

const logger = (_req: Request, _res: Response, next: NextFunction) => {
  console.log("Request...........cats");

  next();
};

export { logger };
