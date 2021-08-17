const { Router } = require('express');
const express = require('express');
const app = express();

// Parsing the Body:
// Tell express to parse the request bodies for either form data or JSON:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const greetings = {
	en: 'hello',
	fr: 'bonjour',
	ic: 'hallah',
	js: 'konnichiwa',
};

app.get('/dogs', (req, res) => {
	console.log('YOU ASKED FOR /DOGS');
	console.log(req);
	res.send('WOOF WOOF');
	res.send([1, 2, 3]);
});

app.get('/show-me-headers', (req, res) => {
	console.log(req.rawHeaders);
	console.log(req.headers);
	res.send(req.headers);
});

// Example of url parameters in this Route.
// res.send will always be the last thing that runs.
// return is also a tool that will stop the function from running.
// use either.
app.get('/greet/:language', function (req, res) {
	const lang = req.params.language;
	const greeting = greetings[lang];
	if (!greeting) res.send('INVALID LANGUAGE!');
	res.send(greeting);
});

app.get('/show-language', (req, res) => {
	const lang = req.headers['accept-language'];
	res.send(`Your language preference is: ${lang}`);
});

// Example; '/search?term=pigs&sort=cute'
app.get('/search', (req, res) => {
	const { term = 'pig', sort = 'top' } = req.query;
	res.send(`SEARCH PAGE! Term is: ${term} sort is: ${sort}`);
});

app.listen(3000, function () {
	console.log('Server started; go to "localhost:3000" to view.');
});
