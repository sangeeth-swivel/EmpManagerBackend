const errorHandler = (error, req, res) => {
  if (error.name == "ConflictError") {
    return res.status(409).json({
      error: {
        status: 409,
        message: error.message,
      },
    });
  }
  if (error.name == "ValidationError") {
    return res.status(403).json({
      error: {
        status: 403,
        message: error.message,
      },
    });
  }
  return res.status(500).json({
    error: {
      status: 500,
      message: error.message,
    },
  });
};

module.exports = errorHandler;
