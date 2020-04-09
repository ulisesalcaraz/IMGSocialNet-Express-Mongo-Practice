const express = require("express");

const config = require("./server/config");

const app = config(express());

// Create database
require("./database");

// Start server
app.listen(app.get("port"), () => {
	console.log("Server on port", app.get("port"));
});
