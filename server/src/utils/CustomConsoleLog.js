class CustomConsoleLog {
    g(...args) {
        process.env.NODE_ENV === "development" && console.log(JSON.stringify(args) || args.toString());
    }
}

module.exports.clo = new CustomConsoleLog();