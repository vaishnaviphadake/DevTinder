// console.log("Starting a new application...");

import express from "express";

const app = express();
app.listen(3000, () => {
	console.log("Server is running on port 3000");
});

app.get("/user", (req, res) => {
	res.send({ firstName: "Vaishnavi", lastName: "Phadake" });
});
app.get(
	"/next",
	(req, res, next) => {
		console.log("Processing the next route...");
		// Call the next middleware or route handler
		// next();
		// res.send({ firstName: "Vaishnavi", lastName: "Phadake" });
		next();
	},
	(req, res, next) => {
		console.log("This is the second route.");
		next();
	},
	(req, res, next) => {
		console.log("This is the third route.");
		next();
	},
	(req, res, next) => {
		console.log("This is the fourth route.");
		res.send("finally a response from the fifth route!");
		// next();
	}
);

app.get("/try", (req, res) => {
	res.send({ firstName: "Vaishnavi", lastName: "Phadake" });
});

app.post("/user", (req, res) => {
	res.send("Data received successfully!");
});
app.delete("/user", (req, res) => {
	res.send("Data deleted  successfully!");
});
app.use("/test/2", (req, res) => {
	res.send("Hello, from the test 2!");
});

app.use("/test", (req, res) => {
	res.send("Hello, from the test !");
});

app.use("/hello", (req, res) => {
	res.send("Hello, from the hello !");
});

/**
 * Special Characters in Routing
1. + (Plus)
The + character matches one or more occurrences of the preceding character.
Example:
app.get('/ab+c', (req, res) => {
  res.send('Route matched: /ab+c');
});
The route /ab+c would match:
/abc
/abbc
/abbbc, and so on.


? (Question Mark)
The ? character makes the preceding character optional in an Express route pattern.
Example:
app.get('/ab?c', (req, res) => {
  res.send('Route matched: /ab?c');
});
This route will match:
/abc
/ac (since b is optional).


* (Asterisk)
The * character matches any sequence of characters in an Express route.
Example:
app.get('/a*cd', (req, res) => {
  res.send('Route matched: /a*cd');
});
This route will match:
/acd
/abcd
/axyzcd, etc.
Regular Expressions
Regular expressions (regex) can be used in Express routing to match complex patterns.
Examples:
app.get(/a/, (req, res) => {
  res.send('Route matched any path containing "a"');
});
This route will match:
/abc
/a123
/123a, etc.
 */
