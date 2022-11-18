import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';

const expressAsyncErrors: ErrorRequestHandler = (
  { status, message }, _req: Request, res: Response, _next:NextFunction) => {
  if (!status) return res.status(500).json({ message });
  return res.status(status).json({ message });
};

export default expressAsyncErrors;
