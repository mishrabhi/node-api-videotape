class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something Went Wrong",
    errors = [],
    statck = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.date = null;
    this.message = message;
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
