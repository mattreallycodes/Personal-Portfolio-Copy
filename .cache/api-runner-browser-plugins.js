module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"gatsby-starter-default","short_name":"Matts Portfolio","start_url":"/","background_color":"#663399","theme_color":"#663399","display":"minimal-ui","icon":"src/images/theBestFavicon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"f04b8505dec71b59361bc2294ff30571"},
    },{
      plugin: require('../node_modules/gatsby-plugin-crisp-chat/gatsby-browser.js'),
      options: {"plugins":[],"websiteId":"1970d31a-f3ed-4127-b8af-ffd26c2e82c9","enableDuringDevelop":true,"defer":true,"enableImprovedAccessibility":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
