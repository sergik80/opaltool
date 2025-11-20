"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const opal_tools_sdk_1 = require("@optimizely-opal/opal-tools-sdk");
// Create Express app
const app = (0, express_1.default)();
app.use(express_1.default.json());
/**
 * Hello World Tool: adds two numbers
 */
// Apply tool decorator after function definition
async function helloWorld(parameters) {
    const { a, b } = parameters;
    let result;
    let numVal = a + b;
    result = `result is ${numVal}`;
    return {
        result
    };
}
// Register the tools using decorators with explicit parameter definitions
(0, opal_tools_sdk_1.tool)({
    name: 'Hello World',
    description: 'Prints out Hello WOrld and adds two numbers',
    parameters: [
        {
            name: 'a',
            type: opal_tools_sdk_1.ParameterType.Number,
            description: 'First number to sum up',
            required: true
        },
        {
            name: 'b',
            type: opal_tools_sdk_1.ParameterType.Number,
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
