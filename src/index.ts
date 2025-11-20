import express from 'express';
import { tool, ParameterType } from '@optimizely-opal/opal-tools-sdk';

// Create Express app
const app = express();
app.use(express.json());

// Interfaces for tool parameters
interface HelloworldParameters {
  a: number;
  b: number;
}


/**
 * Hello World Tool: adds two numbers
 */
// Apply tool decorator after function definition
async function helloWorld(parameters: HelloworldParameters) {
  const { a, b } = parameters;
  

  
  let result: string;
  let numVal = a + b;
   result = `result is ${numVal}` ;
  

  
  return {
    result
  };
}


// Register the tools using decorators with explicit parameter definitions
tool({
  name: 'Hello World',
  description: 'Prints out Hello WOrld and adds two numbers',
  parameters: [
    {
      name: 'a',
      type: ParameterType.Number,
      description: 'First number to sum up',
      required: true
    },
    {
      name: 'b',
      type: ParameterType.Number,
      description: 'second number to sum up',
      required: false
    }
  ]
})(helloWorld);


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Discovery endpoint: http://localhost:${PORT}/discovery`);
});
