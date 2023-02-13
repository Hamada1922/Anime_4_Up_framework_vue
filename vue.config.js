const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath:
    process.env.NODE_ENV === "production" ? "/Anime_4_Up_framework_vue/" : "/",
  transpileDependencies: true,
});
