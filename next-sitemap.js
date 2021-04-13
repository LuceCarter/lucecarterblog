module.exports = {
  siteUrl: "https://lucecarterblog.vercel.app/",
  generateRobotsTxt: true, // (optional)
  robotsTxtOptions: {
    policies: [{ userAgent: "*", disallow: "/api" }],
  },
  exclude: ["/api/*", "/server-sitemap.xml"],
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://lucecarterblog.vercel.app/server-sitemap.xml",
    ],
  },
};
