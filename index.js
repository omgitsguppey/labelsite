const express = require('express');
const path = require('path');
const app = express();

// Serve static assets from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Default route serves the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

module.exports = app;
