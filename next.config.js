// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const path = require('path');

const nextConfig = {
    output: 'export',
    assetPrefix: "https://mars-mendes.github.io/my-nextjs-portfolio/",
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
      },
  }
  
  module.exports = nextConfig