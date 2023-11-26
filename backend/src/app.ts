// Imports secrets from .env file and validates the required environment variables are present
require("./utils/env");

import {
  Environment,
  BASE_URL,
  FRONTEND_URL,
  NODE_ENV,
  PORT,
  WHAT_ENV,
} from "./utils/env";

import express, { Express } from "express";
import cors from "cors";
import morgan from "morgan";
import swaggerUI from "swagger-ui-express";

// Controllers (route handlers)
import * as pingRoutes from "./routes/ping.routes";
import * as templateRoutes from "./routes/template.routes";

// Create Express server
const app: Express = express();

// Express configuration
app.use(morgan("tiny"));
app.use(express.static("public"));

app.use(
  "/docs",
  swaggerUI.serve,
  swaggerUI.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
    },
  })
);

app.use(cors());

// Express configuration
app.set("port", PORT!);

// Primary app routes
app.use(pingRoutes.default);
app.use("/templates", templateRoutes.default);

export default app;
