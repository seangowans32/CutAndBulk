import mongoose from "mongoose";
import config from "./config/config.js";
import app from "./server/express.js";
import userRoutes from "./server/routes/user.routes.js";
import authRoutes from "./server/routes/auth.routes.js";

// Routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

// Database connection
mongoose.Promise = global.Promise;
mongoose
  .connect(config.mongoUri)
  .then(() => console.log("Connected to the database!"))
  .catch((err) => console.error("Database connection error:", err));

mongoose.connection.on("error", () => {
  throw new Error(`unable to connect to database: ${config.mongoUri}`);
});

// Root route (home)
app.get("/", (req, res) => {
  res.type("text/plain");
  res.send(
    "Wake up, Sean…\nThe Matrix has you…\nFollow the white rabbit.\nKnock, knock, Sean."
  );
});

// Start server
app.listen(config.port, (err) => {
  if (err) {
    console.error(err);
  }
  console.info(`Server started on port ${config.port}`);
});