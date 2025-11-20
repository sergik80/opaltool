import express from "express";
import {
  ToolsService,
  tool,
  ParameterType,
} from "@optimizely-opal/opal-tools-sdk";

// Create Express app
const app = express();
app.use(express.json());

// Create Tools Service
const toolsService = new ToolsService(app);

interface HelloworldParameters {
  a?: number;
  b?: number;
}

/**
 * Hello World Tool: adds two numbers
 */
// Apply tool decorator after function definition
async function helloWorld(parameters: HelloworldParameters) {
  const { a, b } = parameters;
  let num1 = a || 0;
  let num2 = b || 0;

  let result: string = "some";
  let numVal = num1 + num2;
  result = `result is ${numVal}`;
  return {
    result,
  };
}

// Register the tools using decorators with explicit parameter definitions
tool({
  name: "HelloWorld",
  description: "Prints out Hello WOrld and adds two numbers",
  parameters: [
    {
      name: "a",
      type: ParameterType.Number,
      description: "first number to sum up",
      required: false,
    },
    {
      name: "b",
      type: ParameterType.Number,
      description: "second number to sum up",
      required: false,
    },
  ],
})(helloWorld);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Discovery endpoint: http://localhost:${PORT}/discovery`);
});
