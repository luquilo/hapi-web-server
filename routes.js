const routes = [
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "ini homepage";
    },
  },
  {
    method: "GET",
    path: "/about",
    handler: (request, h) => {
      return "ini adalah halaman about";
    },
  },
];

module.exports = routes