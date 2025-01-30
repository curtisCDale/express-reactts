const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// Mock data matching the User schema
const users = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
  { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com' },
  { id: 4, name: 'Ronald MacDonald', email: 'email@email.com' }
];

app.get('/api', (req, res) => {
  res.json({ users }); // Return the mock data
});

app.listen(5001, () => {
  console.log('Server is running on port 5001');
});