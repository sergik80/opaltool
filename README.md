# Sample TypeScript Tools Service

This is a sample tools service for Opal using the TypeScript SDK. It provides two tools:

1. **Greeting Tool**: Greets a person in a random language (English, Spanish, or French)
2. **Today's Date Tool**: Returns today's date in the specified format

## Running the Service

### Local Development

```bash
# Install dependencies
npm install

# Run in development mode
npm run dev

# Or build and run
npm run build
npm start
```

## Testing the Service

Once the service is running, you can access:

- Discovery endpoint: http://localhost:3000/discovery
- Tools endpoints:
  - Greeting tool: http://localhost:3000/tools/greeting
  - Today's date tool: http://localhost:3000/tools/todays-date

## Example Requests

