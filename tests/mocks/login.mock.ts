import bcrypt from 'bcryptjs';

const validUsername = 'userTest';
const validPassword = 'test12345';

const validLoginMock = {
  username: validUsername,
  password: validPassword,
};

const noUsernameLoginMock = {
  username: '',
  password: validPassword,
};

const noPasswordLoginMock = {
  username: validUsername,
  password: '',
};

const wrongPasswordLoginMock = {
  username: validUsername,
  password: 'wrongPassword'
};

const validLoginResponseMock = {
  status: 200,
  data: { token: 'randomToken' },
};

const existingUserMock = {
  id: 4,
  username: validUsername,
  password: bcrypt.hashSync(validPassword),
  level: 100,
  vocation: 'Vocation Test'
};

export default {
  validLoginMock,
  noUsernameLoginMock,
  noPasswordLoginMock,
  wrongPasswordLoginMock,
  validLoginResponseMock,
  existingUserMock,
};