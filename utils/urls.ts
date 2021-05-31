const prod = process.env.NODE_ENV === "production";
export default {
  baseUrl: prod ? "https://www.mcnairycountynews.com" : "http://localhost:3000",
  pages: {
    index: "/",
    advertising: "/advertising",
    archives: "/archives",
    aboutUs: "/about",
    contactUs: "/contact",
    login: "/login",
    admin: {
      index: "/admin",
      archives: {
        add: "/admin/archives/add",
      },
      articles: {
        add: "/admin/articles/add",
      },
    },
  },
  api: {
    admin: {
      ads: {
        create: "/api/admin/ads/create",
      },
      archives: {
        create: "/api/admin/archives/create",
      },
      articles: {
        create: "/api/admin/articles/create",
      },
      entries: {
        delete: "api/admin/entries/delete",
      },
      validate: "/api/admin/validate",
    },
    contact: "/api/contact",
    subscribe: "/api/subscribe",
    login: "/api/login",
  },
  authorizeSubscribe: prod ? "https://accept.authorize.net/payment/payment" : "https://test.authorize.net/payment/payment" 
};
