//array route configuration

const routes = [
  {
    method: 'GET',
    path: '/users/{username?}',
    handler: (request, h) => {
      const { username = 'stranger' } = request.params
      return `hallo ${username}!!, selamat datang!!`
    }
  },
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "return homepage";
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
  },
  {
    method: "*",
    path: '/{any*}',
    handler: (request, h) => {
      return 'maaf, halaman tidak ditemukan!'
    }
  },
  {
    method: '*',
    path: '/',
    handler: (request, h) => {
        return 'halaman tidak dapat diakses dengan method tersebut'
    }
  },
  
];

module.exports = routes