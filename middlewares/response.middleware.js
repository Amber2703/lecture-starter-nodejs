const responseMiddleware = (req, res, next) => {
  // TODO: Implement middleware that returns result of the query
  // Example code: Retrieve the result from the database
  const result = {
    message: 'This is the result of the query',
    data: {
      example: 'Example data',
    },
  };

  // Store the result in the request object
  req.result = result;

  // Proceed to the next middleware
   next();
};

export { responseMiddleware };
