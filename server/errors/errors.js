export const someWentWrongError = () => {
  return { code: 500, body: { errors: { message: "Something went wrong" } } };
};

export const elementNotFoundError = (name) => {
  return { code: 404, body: { errors: { message: `${name} not found.` } } };
};

export const limitExceedError = (message) => {
  return { code: 400, body: { errors: { message } } };
};

export const invalidRequestError = (message) => {
    return { code: 400, body: { errors: { message } } };
  };



