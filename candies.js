const { Router } = require('express');

const express = require('express');

const app = express();

// Parsing the Body:
// Tell express to parse the request bodies for either form data or JSON:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const CANDIES = [
	{ name: 'snickers', qty: 43, price: 1.5 },
	{ name: 'skittles', qty: 44, price: 0.5 },
	{ name: 'twixriht', qty: 47, price: 1.0 },
];

app.get('/candies', (req, res) => {
	res.json(CANDIES);
});

// Add data to the "candy database" via post request
app.post('/candies', (req, res) => {
	if (req.body.name.toLowerCase() === 'circus peanuts') {
		res.status(403).json({ msg: 'HORRIBLE CHOICE. CIRCUS PEANUTS FORBIDDEN!' });
	}
	// res.send(`${CANDIES}`); res.send will determine what to send.
	CANDIES.push(req.body);
	// res.json(`${CANDIES}`);  res.json explicitly sends json
	res.status(201).json(CANDIES);
});

app.listen(3000, function () {
	console.log('Server started; go to "localhost:3000" to view.');
});
