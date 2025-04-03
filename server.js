const { FastMCP } = require("fastmcp");
const { z } = require("zod");

// Initialize the FastMCP server
const server = new FastMCP({
  name: "Weather Server",
  version: "1.0.0",
});

// Define the 'getWeather' tool
server.addTool({
  name: "getWeather",
  description: "Returns a weather message.",
  parameters: z.object({}),
  execute: async () => {
    return "the weather is cool";
  },
});

// Start the server using stdio transport
server.start({
  transportType: "stdio",
});

console.log("MCP server is running");