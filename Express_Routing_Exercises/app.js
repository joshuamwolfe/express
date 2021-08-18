const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/candies', (req, res) => {
	res.json(CANDIES);
});

// Add data to the "candy database" via post request
app.get('/', (req, res) => {
	res.send('Test passed!');
});

app.get('/mean', (req, res) => {
	res.send('Test passed!');
});

app.get('/medium', (req, res) => {
	res.send('Test passed!');
});

app.get('/mode', (req, res) => {
	res.send('Test passed!');
});

app.listen(3000, function () {
	console.log('Server started; go to "localhost:3000" to view.');
});
