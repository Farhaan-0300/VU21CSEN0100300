const express = require('express');
const router = express.Router();
const axios = require('axios');


router.get('/:categoryname/products', async (req, res) => {
    const { categoryname } = req.params;
    const { top = 10, minPrice = 1, maxPrice = 10000 } = req.query;
    
    try {
        const response = await axios.get(`http://20.244.56.144/test/companies/AMZ/categories/${categoryname}/products?top=${top}&minPrice=${minPrice}&maxPrice=${maxPrice}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching products');
    }
});

module.exports = router;
