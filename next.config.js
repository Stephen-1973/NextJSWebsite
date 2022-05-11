module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'pbs.twimg.com','codding.in','stephen-1973.github.io','images.unsplash.com'],
  }
}
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})
module.exports = withBundleAnalyzer({});
