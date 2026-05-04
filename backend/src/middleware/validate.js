import { createHttpError } from './errorHandler.js';

export function validateRequired(fields) {
  return (req, _res, next) => {
    for (const field of fields) {
      if (req.body[field] === undefined || req.body[field] === null || req.body[field] === '') {
        return next(createHttpError(400, `${field} is required`));
      }
    }
    return next();
  };
}

export function asyncHandler(fn) {
  return (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);
}
