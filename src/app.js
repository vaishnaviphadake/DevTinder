// console.log("Starting a new application...");

import express from "express";

const app = express();
app.listen(3000, () => {
	console.log("Server is running on port 3000");
});

app.use("/test", (req, res) => {
	res.send("Hello, from the test !");
});
app.use("/hello", (req, res) => {
	res.send("Hello, from the hello !");
});
