const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My 2022 Reading List Api Doc",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express, Mongo and documented with Swagger",
      contact: {
        name: "Sai",
        email: "saihormkham1998@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:5000/api/",
      },
    ],
  },
  apis: ['./routes/*.js'],
};

export default options;