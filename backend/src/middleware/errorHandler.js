export function notFoundHandler(_req, res) {
  return res.status(404).json({ error: 'Route not found' });
}

export function errorHandler(error, _req, res, _next) {
  const status = error.statusCode || 500;
  return res.status(status).json({
    error: error.message || 'Internal server error'
  });
}

export function createHttpError(statusCode, message) {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
}
