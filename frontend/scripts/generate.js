import OpenAPI from "openapi-typescript-codegen";
import * as rimraf from "rimraf";

const generate = async () => {
  await rimraf.rimraf("./src/api/generated");

  await OpenAPI.generate({
    exportCore: true,
    exportSchemas: false,
    exportServices: true,
    input: "http://localhost:3001/swagger.json",
    output: "./src/api/generated",
    clientName: "readMEAPI",
  });

  console.log("Generated API client");
};

generate();