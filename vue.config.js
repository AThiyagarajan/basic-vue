module.exports = {
    configureWebpack: {
        devtool: process.env.NODE_ENV === "production" ? false : 'source-map'
    },
    devServer: {
        disableHostCheck: process.env.NODE_ENV === "production" ? false : true,
        https: true,
        open: true,
    },
}