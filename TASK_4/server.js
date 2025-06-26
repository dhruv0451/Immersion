const express = require('express');
const mongoose = require('mongoose');
const vehicleRoutes = require('./routes/vehicleRoutes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/vehicles_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/vehicles', vehicleRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('API is running');
});

