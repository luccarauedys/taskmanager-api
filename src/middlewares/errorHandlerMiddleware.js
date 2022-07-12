const errorHandler = (error, req, res, next) => {
  console.log(error);
  if (error.response) {
    return res.status(error.response.status).send(error.response.message);
  }
  res.sendStatus(500);
};

export default errorHandler;
