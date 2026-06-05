module.exports = {
  siteUrl: 'https://torquedetailingstudio.com',  // 👉 Replace with your actual domain
  generateRobotsTxt: true,            // ✅ Generate robots.txt automatically
  sitemapSize: 5000,                  // ✅ Default is fine; adjust if huge site
  changefreq: 'weekly',               // 👉 Crawlers see pages as updated weekly
  priority: 0.7,                      // 👉 General priority for your pages
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      // Add any extra sitemaps if you have them
      // 'https://yourdomain.com/my-custom-sitemap-1.xml',
    ],
  },
};
