const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World from CI Pipeline!');
});

app.get('/api/greet', (req, res) => {
  res.json({ message: 'Hello from the API!' });
});

app.post('/api/data', (req, res) => {
  const { name } = req.body;
  res.json({ message: `Hello, ${name}!` });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

