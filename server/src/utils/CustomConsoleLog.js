class CustomConsoleLog {
    g(...args) {
        args = args.map(arg => typeof (arg) == "object" ? JSON.stringify(arg) : arg);

        process.env.NODE_ENV === "development" && console.log(args.join(" "));
    }
}

module.exports.clo = new CustomConsoleLog();