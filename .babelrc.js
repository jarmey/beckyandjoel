module.exports = {
  presets: [
    [
      "@babel/env",
      {
        modules: false,
        targets: {
          browsers: [
            "> 1%",
            "last 2 versions",
            "ie >= 11",
          ],
        },
      }
    ],
  ],
  plugins: [
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-transform-classes",
    ["babel-plugin-transform-builtin-extend", {
      globals: ["Error"]
    }]
  ]
};
