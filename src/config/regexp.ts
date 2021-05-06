const EMAIL_REGEXP = new RegExp("[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@dsm.hs.kr");
const NICKNAME_REGEXP = new RegExp("[0-9a-zA-Z]{2,20}");
const PASSWORD_REGEXP = new RegExp(
  "^(?=.*\\d)(?=.*[a-zA-Z])[0-9a-zA-Z*!@$%^&(){}\\[\\]:;<>,.?/~_+-=|\\\\]{8,36}$"
);

export { PASSWORD_REGEXP, EMAIL_REGEXP, NICKNAME_REGEXP };
