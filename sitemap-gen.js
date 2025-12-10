const router = require('./src/router/routeLayoute').default;
const Sitemap = require('react-router-sitemap').default;

function generateSitemap() {
  return (
    new Sitemap(router)
      .build('https://atazhiyev-commits.github.io/sko_invest/')
      .save('./public/sitemap.xml')
  );
}

generateSitemap();