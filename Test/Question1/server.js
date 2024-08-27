const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Top Products HTTP Microservice');
});

// Import routes
const productRoutes = require('./routes/products');
app.use('/categories', productRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
