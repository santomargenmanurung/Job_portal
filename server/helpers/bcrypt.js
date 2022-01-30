const bcrypt = require("bcryptjs");

function hashingPaswword(password) {
  return bcrypt.hashSync(password, 10);
}

function comparePassword(password, hashedPass) {
  return bcrypt.hashSync(password, hashedPass);
}

module.exports = {
  hashingPaswword,
  comparePassword,
};
