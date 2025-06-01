const { addBookHandler } = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/books",
    handler: addBookHandler,
    options: {
      cors: {
        origin: ["*"],
      },
    },
  },
];

module.exports = routes;
