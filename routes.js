const routes = [
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "return homepage";
    },
  },
  {
    method: '*',
    path: '/',
    handler: (request, h) => {
        return `tidak dapat mengakses halaman dengan method ${method}`
    }
  },
  {
    method: "GET",
    path: "/about",
    handler: (request, h) => {
      return "return about page";
    },
  },
  {
    method: '*',
    path: '/about',
    handler: (request, h) => {
        return `tidak dapat mengakses halaman dengan method ${method}`
    }
  }
  
];

module.exports = routes