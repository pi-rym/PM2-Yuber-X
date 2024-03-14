module.exports = {
    mode:'development',
    entry: "./scripts/index.js",

    outout: {
        path: __dirname + "./public",
        filename: "bundle.js"
    },
};