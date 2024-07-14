const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
// Simulate some data (replace with your actual data source)
let data = { message: 'No new data yet' };

app.get('/data', (req, res) => {
  res.json(data);
});

// Simulate data updates every 2 seconds (adjust interval as needed)
setInterval(() => {
  data.message = `New data: ${Math.random()}`;
}, 2000);


 
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));

