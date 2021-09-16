const path = require('path')
require('dotenv').config()

module.exports = {
  reactStrictMode: true,
}

const withSass = require('@zeit/next-sass');
module.exports = withSass({

cssModules: true
})
module.exports = {

sassOptions: {
includePaths: [path.join(__dirname, 'styles')],
},
}

module.exports ={

  env: {
    API_URL: process.env.API_URL
  },


  webpack: config =>{
    config.resolve.alias['components']= path.join(__dirname, 'components')
    config.resolve.alias['public']= path.join(__dirname, 'public')

    return config
  }
}