# to start the mock API server (json-server):
    npx json-server --watch db.json --port 3001   
    this will run fake REST API in :  http://localhost:3001/platforms



example
# Run both together (in one command)
i can use a tool like concurrently to run both with one command:

npm install --save-dev concurrently
Then in package.json add:

"scripts": {
  "dev": "concurrently \"npm:start:frontend\" \"npm:start:json\"",
  "start:frontend": "vite",  // or "react-scripts start"
  "start:json": "json-server --watch db.json --port 3001"
}
Then just run:

npm run dev
