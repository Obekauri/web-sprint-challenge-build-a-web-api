const express = require('express');
const router = express.Router();

// Define your action routes here
router.get('/', (req, res) => {
    res.json({ message: 'Actions route' });
});

module.exports = router;
