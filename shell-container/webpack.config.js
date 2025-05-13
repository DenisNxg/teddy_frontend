const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    welcome: "https://teddy-frontend-welcome.vercel.app/remoteEntry.js", 
    home: "https://teddy-frontend-home.vercel.app/remoteEntry.js",  
    cliente: "https://teddy-frontend-cliente.vercel.app//remoteEntry.js",
    produto: "https://teddy-frontend-produto.vercel.app//remoteEntry.js",
  },

  shared: {
    ... shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' })
  },

});
