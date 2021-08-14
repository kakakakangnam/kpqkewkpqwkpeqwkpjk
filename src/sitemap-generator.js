require("babel-register")({ 
  presets: ["es2015", "react"] 
});
// require("babel-register");

const router = require('./sitemap-routes').default;
const Sitemap = require('react-router-sitemap').default;
function generateSitemap() { 
  return ( 
    new Sitemap(router)
      .build("http://www.kangnamdoor.com")
      .save("./public/sitemap.xml")
  ); 
}
generateSitemap();