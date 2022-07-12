import jwt from 'jsonwebtoken';

export const verifyJWT = (req, res, next) => {
  const token = req.headers['x-access-token'];

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) return res.status(401).send('Invalid token.');
    if (decoded) res.locals.userId = decoded.userId;
  });

  next();
};
