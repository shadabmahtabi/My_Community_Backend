const errorMiddleware = (err, req, res, next) => {
  err.message ||= "Internal Server Error";
  err.statusCode ||= 500;

  res.status(statusCode).json({
    success: false,
    message: err.message,
  });
};

const WrapAsync = (func) => async (req, res, next) => {
  try {
    await func(req, res, next);
  } catch (error) {
    next(error);
  }
};

export { errorMiddleware, WrapAsync };
