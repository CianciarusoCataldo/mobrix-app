// next.config.js
const withTM = require("next-transpile-modules")(["mobrix-ui"]);

module.exports = withTM({
  output: "export",
});
