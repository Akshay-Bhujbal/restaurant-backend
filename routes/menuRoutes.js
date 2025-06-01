const express = require('express')
const router = express.Router();
const MenuItem = require('../models/MenuItem');

router.get('/', async(req, res) => {
	try{
		const items = await MenuItem.find({});
		res.status(200).json(items);
	} catch (error) {
		res.status(500).json({ message: 'Failed to fetch menu items', error: error.message });
	}
});

module.exports = router;