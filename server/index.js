const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Define your API routes or other server logic here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
