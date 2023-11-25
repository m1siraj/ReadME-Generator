import dotenv from "dotenv";
import fs from "fs";

if (fs.existsSync(".env")) {
  dotenv.config({ path: ".env" });
} else if (fs.existsSync(".env.example")) {
  // Copy .env.example to .env and exit with message
  fs.copyFileSync(".env.example", ".env");
  console.log("Copied .env.example to .env");
  console.log(
    "Please edit the .env file to supply config environment variables"
  );
  process.exit(0);
} else {
  console.error("No .env or .env.example file found");
  process.exit(1);
}

const listOfErrorMessages: string[] = [];

export const NODE_ENV = process.env.NODE_ENV;

if (!NODE_ENV) {
  listOfErrorMessages.push("No NODE_ENV variable found in .env file");
}

export enum Environment {
  PRODUCTION = "production",
  DEVELOPMENT = "development",
}

export const WHAT_ENV: Environment = NODE_ENV as Environment;

export const PORT = process.env.PORT;

if (!PORT) {
  listOfErrorMessages.push("No PORT variable found in .env file");
}

export const FRONTEND_URL = process.env.FRONTEND_URL;
export const BASE_URL = process.env.BASE_URL;

if (!FRONTEND_URL) {
  listOfErrorMessages.push("No FRONTEND_URL variable found in .env file");
}

if (!BASE_URL) {
  listOfErrorMessages.push("No BASE_URL variable found in .env file");
}

if (listOfErrorMessages.length > 0) {
  console.error("Missing environment variables:");
  listOfErrorMessages.forEach((message: string, index: number) =>
    console.error(`[${index + 1}] ${message}`)
  );
  process.exit(1);
}
