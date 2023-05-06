import { Request, Response, NextFunction } from "express";

const logger = (_req: Request, _res: Response, next: NextFunction) => {
  console.log("Request...........");

  next();
};

export { logger };
