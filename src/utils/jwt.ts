import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'secretPassword';

type PayloadType = {
  id: number,
  username: string,
};

function sign(payload: PayloadType): string {
  const token = jwt.sign(payload, secret);
  return token;
}

function verify(token: string): PayloadType {
  const data = jwt.verify(token, secret) as PayloadType;
  return data;
}

export default {
  sign,
  verify,
};