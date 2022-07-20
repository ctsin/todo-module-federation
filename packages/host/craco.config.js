const { ModuleFederationPlugin } = require("webpack").container;

const deps = require("./package.json").dependencies;

module.exports = () => ({
  webpack: {
    configure: {
      output: {
        publicPath: "auto",
      },
    },
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "host",
          filename: "remoteEntry.js",
          remotes: {
            host: "host@http://localhost:3000/remoteEntry.js",
            input: "input@http://localhost:3001/remoteEntry.js",
            list: "list@http://localhost:3002/remoteEntry.js",
            counter: "counter@http://localhost:3003/remoteEntry.js",
          },
          exposes: {
            "./store": "./src/store",
            "./hooks": "./src/hooks",
          },
          shared: {
            ...deps,
            react: {
              singleton: true,
              requiredVersion: deps.react,
            },
            "react-dom": {
              singleton: true,
              requiredVersion: deps["react-dom"],
            },
          },
        }),
      ],
    },
  },
});
