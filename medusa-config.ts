import dotenv from "dotenv"
dotenv.config()

export default {
  projectConfig: {
    database_url: process.env.DATABASE_URL,
    jwt_secret: process.env.JWT_SECRET || "supersecret",
    cookie_secret: process.env.COOKIE_SECRET || "supersecret",
    store_cors: process.env.STORE_CORS,
    admin_cors: process.env.ADMIN_CORS,
  },
  plugins: [],
}
