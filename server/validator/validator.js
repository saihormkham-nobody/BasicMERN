const ObjectId = require("mongodb").ObjectId;

const mongoIdValidator = (value) => {
  const isValidId = ObjectId.isValid(value);
  if (!isValidId) {
    return Promise.reject(
      "Argument passed in must be a string of 12 bytes or a string of 24 hex characters"
    );
  }
  return isValidId;
};

module.exports = {
  mongoIdValidator,
};
