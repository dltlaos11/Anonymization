const { createProxyMiddleware } = require("http-proxy-middleware");
/* 프록시 설정  */

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://intindev.com:8888",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};
