const path = require("path");
const ChunkRenamePlugin = require("../../lib/");

module.exports = {
    entry: {
        loader: "./src/loader.js",
        vendor: "./src/vendor.js"
    },

    output: {
        path: path.resolve(__dirname, "..", "tmp"),
        filename: "[name]-[chunkhash].js",
        chunkFilename: "chunk-[name]-[chunkhash].js"
    },

    plugins: [
        new ChunkRenamePlugin({
            loader: "loader.js",
            login: "chunk-[name]-page.js"
        })
    ]
};
