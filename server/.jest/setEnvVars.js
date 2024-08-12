process.env.NODE_ENV = "test";

process.env.APP_HOST = process.env.APP_HOST || "127.0.0.1";
process.env.APP_PORT = process.env.APP_PORT || "3000";

process.env.DB_HOST = process.env.DB_HOST || "127.0.0.1";
process.env.DB_PORT = process.env.DB_PORT || "27017";
process.env.DB_NAME = process.env.DB_NAME || "PatiKom_Test";

process.env.PASSWORD_KEY = process.env.PASSWORD_KEY;

process.env.ACCESS_TOKEN_SECRET_KEY = process.env.ACCESS_TOKEN_SECRET_KEY;
process.env.REFRESH_TOKEN_SECRET_KEY = process.env.REFRESH_TOKEN_SECRET_KEY;